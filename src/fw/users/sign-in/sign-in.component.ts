import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  submitting    = false;
  formError     = false;
  

  constructor() { }

  ngOnInit() {
  }

}
