import { Route } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";


export const appRoutes: Route[] = [
	{ path: 'dashboard', component: DashboardComponent }
	,{ path: 'settings', component: SettingsComponent }
	,{ path: 'country-list/:count', component: CountryListComponent }
	,{ path: 'country-detail/:country', component: CountryDetailComponent }
	,{ path: 'country-maint', component: CountryMaintComponent }
	//remember, order matters - first match wins
	,{path: "", component: DashboardComponent }
	,{path: "**", component: DashboardComponent }
]