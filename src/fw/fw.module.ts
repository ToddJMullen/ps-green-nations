import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//custom
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	  FrameworkBodyComponent
	  ,ContentComponent
	  ,TitleBarComponent
	  ,MenuComponent
  ]
  ,exports: [
	  FrameworkBodyComponent
	//   ,ContentComponent//not needed/wanted because the <fw-content> is internal to fw???
  ]
})
export class FwModule { }
