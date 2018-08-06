import { Observable } from "rxjs/Observable";


export abstract class FwUserApi{
	//we define the method signatures as an interface expected by the Fw Users package
	// The API should be implemented by the app and injected back into the Framework
	signIn: (username:string, password: string, rememberMe: boolean) => Observable<any>;
	// register
	signOut: () => Observable<any>;
	//resetPwd
	//etc...
}