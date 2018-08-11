import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

import { FieldDefinition } from '../field-definition';


@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  //define external interface

  //inputs the component requires or can work with
  @Input() vm: any;
  @Input() vmDefinition: Array<FieldDefinition>;
  @Input() errorMessage: string;
  /**
   * The operation currently requested: detail, create, update
   */
  @Input() operation: string;
  
  //events that the component may fire
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  //data elements
  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;

  constructor(
    private router: Router
    ,private route: ActivatedRoute
    ,private location: Location
  ) { }

  ngOnChanges( changes:SimpleChanges ){
    if( changes['errorMessage'].currentValue && this.status === "waiting" ){
      this.status = "";
    }
  }

  clearForm():void {
    let group = {};
    this.vmCopy = Object.assign({}, this.vm);//make a shallow copy of the object
    console.log("What is vmDefinition? Type:", typeof this.vmDefinition, ",", this.vmDefinition );
    this.vmDefinition.forEach( field => {
      if( field.required ){
        group[ field.key ] = new FormControl( this.vmCopy[field.key], Validators.required )
      }
      else {
        group[ field.key ] = new FormControl( this.vmCopy[field.key] );
      }
      this.form = new FormGroup( group );
    });
  }//clearForm

  ngOnInit() {
    this.clearForm();
    this.route.params.subscribe( params => {//router handles unsubscribe for this
      this.operation = params["operation"];
      this.clearForm();
    });
    console.log("What is vmDefinition? Type:", typeof this.vmDefinition );
  }

  onBack(){
    this.errorMessage = null;
    this.location.back();
  }

  onCancel(){
    this.onBack();
  }

  onCreate(){

  }


}//DynamicForm
