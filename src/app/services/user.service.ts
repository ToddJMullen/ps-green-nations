import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { delay } from "rxjs/operators/delay";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";

import { FwUserApi } from "../../fw/users/user-api";
import { Router } from "@angular/router";

@Injectable()
export class UserService implements FwUserApi{

	isAuthenticated = true;
	username:string;

	constructor(
		private router: Router
	){}

	signIn( username:string, pwd:string, rememberMe:boolean ): Observable<any>{
		console.log(`UserService::signIn(): ${username}, ${pwd}, ${rememberMe}`)
		this.username = username;
		this.isAuthenticated = true;
		return Observable.of({}).pipe(delay(1000))
		// return Observable.throw("Invalid User Name / Password")
		// ^^^ for testing
	}

	signOut(): Observable<any>{
		this.isAuthenticated = false;
		this.router.navigate(["signin"]);
		return Observable.of({}).pipe( delay(1000));
	}
}