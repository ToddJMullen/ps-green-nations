import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountyDetailComponent } from './county-detail/county-detail.component';
import { CountyListComponent } from './county-list/county-list.component';
import { CountyMaintComponent } from './county-maint/county-maint.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent,
    CountyDetailComponent,
    CountyListComponent,
    CountyMaintComponent
  ],
  imports: [
    BrowserModule
    ,HttpModule
    ,FormsModule
    ,FwModule
    ,RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
