import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

// import { MenuItem } from '../../services/menu.service';//og location
//I chose the 'separate file' solution
import { MenuItem } from './menu-item.iface';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
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
  ) { }

  ngOnInit() {
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
