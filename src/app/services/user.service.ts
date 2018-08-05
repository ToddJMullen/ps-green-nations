import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import { FwUserApi } from "../../fw/users/user-api";

@Injectable()
export class UserService implements FwUserApi{
	isAuthenticate: true;

	constructor(){}

	signIn( username:string, pwd:string, rememberMe:boolean ): Observable<any>{
		console.log(`UserService::signIn(): ${username}, ${pwd}, ${rememberMe}`)
		this.isAuthenticate = true;
		return Observable.of({});
	}
}