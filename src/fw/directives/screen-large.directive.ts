import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[screenLarge]'
})
export class ScreenLarge {

  isInDom = false;

  constructor(
    private viewContainer: ViewContainerRef
    ,private template: TemplateRef<Object>
    ,private screenService: ScreenService
  ) {
    screenService.resize$.subscribe( () => this.onResize() );
  }

  @Input()
  set screenLarge( isLarge ){
    //ignore input (not listening for passed attr value)
    isLarge = this.screenService.screenWidth > this.screenService.largeBreakpoint;

    if( isLarge && !this.isInDom ){
      //add the marked element to the DOM in place
      this.viewContainer.createEmbeddedView( this.template );
      //set flag that the elements are on the DOM
      this.isInDom = true;
      console.log("Added to DOM:", this.template );
    }
    else if( !isLarge && this.isInDom ){
      //if below screen threshold and it's in the DOM, take it out
      this.viewContainer.clear();
      //update the DOM flag
      this.isInDom = false;
      console.log("Removed from DOM:", this.template );
    }
  }

  onResize(){
    this.screenLarge = false;//will trigger the setter above
  }

}
