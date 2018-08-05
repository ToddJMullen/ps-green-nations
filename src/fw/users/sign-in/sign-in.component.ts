import { Component, OnInit } from '@angular/core';

import { FwUserApi } from '../user-api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  submitting    = false;
  formError     = false;
  

  constructor(
    private userApi: FwUserApi
    ,private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit( signInForm: NgForm ){
    if( signInForm.valid ){
      console.log("submitting...", signInForm );
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(
         signInForm.value.username
        ,signInForm.value.password
        ,signInForm.value.rememberMe
      )
      .subscribe( rsp => {
        console.log("Sign Rsp:", rsp );
        this.router.navigate(["/authenticated"])
      }, err => {
        console.error("Sign In Failed:", err );
        this.submitting = false;
        this.formError = err;
      } )
    }
  }

}
