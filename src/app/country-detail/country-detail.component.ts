import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country:Country;
  operation:string;
  countryFieldDataAry: Array<FieldDefinition> = [
    {key: "id"
      ,type: "number"
      ,isId: true
      ,label: "ID"
      ,required: true
    },{key: "name"
      ,type: "string"
      ,isId: false
      ,label: "Name"
      ,required: true
    },{key: "epiIndex"
      ,type: "number"
      ,isId: false
      ,label: "EPI Index"
      ,required: true
    }
  ]

  constructor(
    private router: Router
    ,private route:ActivatedRoute
    ,private appData: AppDataService
  ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params["operation"];

    if( this.operation == "create" ){//reset for new values
      this.country = {id: 0, name: "", epiIndex: null};
    }
    else {
      this.appData
      .getCountry( this.route.snapshot.params["id"] )
      .subscribe( (country:Country) => {
        console.log('Loaded country:', this.country );
        this.country = country;
      });
    }
  }

}
