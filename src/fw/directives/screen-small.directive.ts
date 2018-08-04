import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[screenSmall]'
})
export class ScreenSmall {

  isInDom = false;

  constructor(
    private viewContainer: ViewContainerRef
    ,private template: TemplateRef<Object>
    ,private screenService: ScreenService
  ) {
    screenService.resize$.subscribe( () => this.onResize() );
  }

  @Input()
  set screenLarge( isSmall ){
    //ignore input (not listening for passed attr value)
    isSmall = this.screenService.screenWidth < this.screenService.largeBreakpoint;

    if( isSmall && !this.isInDom ){
      //add the marked element to the DOM in place
      this.viewContainer.createEmbeddedView( this.template );
      //set flag that the elements are on the DOM
      this.isInDom = true;
      console.log("Added to DOM:", this.template );
    }
    else if( !isSmall && this.isInDom ){
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
