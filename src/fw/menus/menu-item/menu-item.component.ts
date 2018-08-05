import { Component, OnInit, Input, HostBinding, HostListener
        ,Renderer, ElementRef, style, animate } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition } from '@angular/core';

// import { MenuItem } from '../../services/menu.service';//og location
//I chose the 'separate file' solution
import { MenuItem } from './menu-item.iface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
  ,animations: [//removed in markup bc of causing irregular/poor behavior
    trigger("visibilityChanged", [//name of the animation defined
      transition(":enter", [// void => * alias, ie DNE => whatever state
        style({opacity: 0})//start invisible
        ,animate( 250, style({opacity: 1}) )//over 250ms fade in
      ])
      ,transition(":leave", [// * => void alias, is whatever state => DNE
        animate( 100, style({opacity: 0}))//100ms fade out
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() item = <MenuItem>null;
  //Issue 2034, ^^^^^^^^^ warnings when using type declarariont of an interface not declared in own file
  @HostBinding("class.parent-is-popup")
  @Input() parentIsPopup  = true;

  isActiveRoute   = false;

  mouseInPopup    = false;
  mouseInItem     = false;

  popupTop        = 37;
  popupLeft       = 0;

  constructor(
    private router:Router
    ,private menuService: MenuService
    ,private renderer: Renderer
    ,private elem: ElementRef
  ) { }


  ngOnInit(){//when the instance is created, we need to check its route agains the current uri
    this.checkActiveRoute( this.router.url );
    //we also need to setup a watch for router changes
    this.router.events.subscribe( event => {
      if( event instanceof NavigationEnd ){//we want to know when the router finished a change
        this.checkActiveRoute( event.url );//so that we can recompare the path
        // console.log(`Navigation event to ${event.url}, is active: ${this.isActiveRoute}`);
      }
    });
  }

  checkActiveRoute( route ){
    this.isActiveRoute = route == ("/" + this.item.route);
  }

  /**
   * The click handler deals with the vertical menu interactions
   * @param e Menu click event 
   */
  @HostListener("click", ["$event"])
  onClick(e):void{
    e.stopPropagation();
    if( this.item.subMenu ){
      if( this.menuService.isVertical ){//then toggle mouseInPopup to toggle visibility
        this.mouseInPopup = !this.mouseInPopup;
      }
    }
    else if( this.item.route ){
      //create artificial mouseleave event
      let newEvent = new MouseEvent("mouseleave", {bubbles: true});
      this.renderer.invokeElementMethod(//artificially dispatch it from 'this'
        this.elem.nativeElement, 'dispatchEvent', [newEvent]
      );
      //update the application & route
      this.router.navigate(["/" + this.item.route]);
    }
  }

  onPopupMouseEnter(event){
    if( !this.menuService.isVertical ){
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event){
    if( !this.menuService.isVertical ){
      this.mouseInPopup = false;
    }
  }
 
  @HostListener("mouseleave",["$event"])
  onMouseLeave(event):void{
    if( !this.menuService.isVertical ){
      this.mouseInItem = false;
    }
  }

  @HostListener("mouseenter")
  onMouseEnter():void{
    if( !this.menuService.isVertical ){
      if( this.item.subMenu ){
        this.mouseInItem = true;
        if( this.parentIsPopup ){
          this.popupLeft  = 160;
          this.popupTop   = 0;
        }
      }
    }
  }


}
