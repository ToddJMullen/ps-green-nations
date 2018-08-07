import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';
import { Country } from '../view-models/country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {


  countries   : Country[];
  deleteError : string;
  deleteId    : number;
  isDeleting  = false;

  constructor(
    private dataService: AppDataService
    ,private router: Router
  ) {
    dataService.getCountries().subscribe( countryAry => this.countries = countryAry )
   }

  ngOnInit() {
  }

}
