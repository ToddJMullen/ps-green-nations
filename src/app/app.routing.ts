import { Route } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";
import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";
//fw module
import { SignInComponent } from "../fw/users/sign-in/sign-in.component";
import { RegisterUserComponent } from "../fw/users/register-user/register-user.component";
import { AuthGuard } from "./services/auth-guard.service";



export const appRoutes: Route[] = [
	{path: "signin", component: SignInComponent}
	,{path: "register", component: RegisterUserComponent }
	,{path: "authenticated", component: AuthenticatedUserComponent
		,canActivate: [AuthGuard]
		,children: [
			{ path: "", canActivateChild: [AuthGuard]
				,children: [
					{ path: "", redirectTo: "dashboard", pathMatch: "full"}//redirect default logged in page
					,{ path: 'dashboard', component: DashboardComponent }
					,{ path: 'settings', component: SettingsComponent }
					,{ path: 'country-list/:count', component: CountryListComponent }
					,{ path: 'country-detail/:id/:operation', component: CountryDetailComponent }
					,{ path: 'country-maint', component: CountryMaintComponent }
			]}
	]}
	,{path: "", component: SignInComponent }
	,{path: "**", component: SignInComponent }
];

// export const appRoutes: Route[] = [
// 	{ path: 'dashboard', component: DashboardComponent }
// 	,{ path: 'settings', component: SettingsComponent }
// 	,{ path: 'country-list/:count', component: CountryListComponent }
// 	,{ path: 'country-detail/:country', component: CountryDetailComponent }
// 	,{ path: 'country-maint', component: CountryMaintComponent }
// 	//remember, order matters - first match wins
// 	,{path: "", component: DashboardComponent }
// 	,{path: "**", component: DashboardComponent }
// ]