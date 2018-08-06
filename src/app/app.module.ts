import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { FwUserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryMaintComponent,
    CountryListComponent,
    CountryDetailComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule
    ,HttpModule
    ,FormsModule
    ,FwModule
    ,RouterModule.forRoot( appRoutes )
  ],
  providers: [
    UserService
    ,{provide: FwUserApi, useExisting: UserService}
    ,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
