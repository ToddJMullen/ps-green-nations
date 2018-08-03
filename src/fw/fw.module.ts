import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//custom
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	  FrameworkBodyComponent
	  ,ContentComponent
  ]
  ,exports: [
	  FrameworkBodyComponent
	//   ,ContentComponent//not needed/wanted because the <fw-content> is internal to fw???
  ]
})
export class FwModule { }
