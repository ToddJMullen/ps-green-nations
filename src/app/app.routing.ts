import { Route } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CountriesComponent } from "./countries/countries.component";
import { SettingsComponent } from "./settings/settings.component";


export const appRoutes: Route[] = [
	{path: "dashboard", component: DashboardComponent }
	,{path: "countries", component: CountriesComponent }
	,{path: "settings", component: SettingsComponent }
	//remember, order matters - first match wins
	,{path: "", component: DashboardComponent }
	,{path: "**", component: DashboardComponent }
]