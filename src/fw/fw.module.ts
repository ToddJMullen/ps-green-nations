import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//custom
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menus/menu/menu.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenSmall } from './directives/screen-small.directive';
import { MenuService } from './services/menu.service';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
  ],
  declarations: [
	  FrameworkBodyComponent
	  ,ContentComponent
	  ,TitleBarComponent
    ,MenuComponent
    ,TopBarComponent
    ,StatusBarComponent
    ,ScreenLarge
    ,ScreenSmall
    ,MenuItemComponent
    ,PopupMenuComponent
    ,SignInComponent
  ]
  ,providers: [
    FrameworkConfigService
    ,ScreenService
    ,MenuService
  ]
  ,exports: [
	  FrameworkBodyComponent
  ]
})
export class FwModule { }
