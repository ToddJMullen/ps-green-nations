import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,FormsModule
    ,ReactiveFormsModule
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
    ,RegisterUserComponent
    ,DynamicFormComponent
    ,DynamicFieldComponent
  ]
  ,providers: [
    FrameworkConfigService
    ,ScreenService
    ,MenuService
  ]
  ,exports: [
    FrameworkBodyComponent
    ,SignInComponent
    ,RegisterUserComponent
    ,DynamicFormComponent
    // ,DynamicFieldComponent//I don't think this is intended to be used outside the DynamicForm
  ]
})
export class FwModule { }
