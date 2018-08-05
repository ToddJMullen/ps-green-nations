import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  submitting    = false;
  formError     = false;
  
  constructor() { }

  ngOnInit() {
  }

}
