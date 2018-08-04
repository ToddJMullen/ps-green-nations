import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";



@Injectable()
export class ScreenService{
	private resizeSource = new Subject<null>();
	/**
	 * Declare public observable resize event that can be subscribed to
	 */
	resize$ = this.resizeSource.asObservable();

	largeBreakpoint		= 800;
	screenWidth			= 1000;
	screenHeight		= 800;

	constructor(){
		this.measure();
		try {
			window.addEventListener("resize", $resize => this.onResize($resize) );
		} catch (error) {
			console.error( `Failed to add window resize listener with error:`, error );			
		}
	}


	measure(){
		console.log("measure()");
		try {
			this.screenWidth	= window.innerWidth;
			this.screenHeight	= window.innerHeight;
		} catch ( e ) {
			console.error(`Screen size error. Using default dimensions ${this.screenWidth} x ${this.screenHeight}`);
		}
	}

	isLarge():boolean{
		return this.screenWidth >= this.largeBreakpoint;
	}


	onResize( $resize ){
		this.measure();
		this.resizeSource.next();
	}



}//ScreenService