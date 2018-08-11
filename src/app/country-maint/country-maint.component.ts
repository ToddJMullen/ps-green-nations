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
    dataService.getCountries()
        .subscribe( countryAry => this.countries = countryAry )
   }

  ngOnInit() {
  }

  showCountryDetail( id:string ):void{
    this.router.navigate(["/authenticated/country-detail", id, "details" ]);
  }

  createCountry():void{
    this.router.navigate(["/authenticated/country-detail",0,"create"])
  }

  editCountry( id:number ):void {
    this.router.navigate(["/authenticated/country-detail", id, "edit"]);
  }

  deleteCountryQuestion( id:number ):void{
    this.deleteId = id;
  }

  cancelDelete(){
    this.deleteId = null;
    this.isDeleting = false;
  }


  deleteCountry( id:number ):void{
    this.isDeleting = true;
    this.dataService
      .deleteCountry(id)
      .subscribe(
        rsp => this.cancelDelete()
        ,err => {
          this.deleteError = err;
          this.isDeleting = false;
        }
      );
  }

}
