import { Country } from './../../models/Country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.scss']
})
export class CreateDeliveryComponent implements OnInit {

  listCountries:any[]=[];
  country:Country | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getRegion(countries:any[]){
    this.listCountries = countries
  }

  setCountry(country:Country){
    this.country = country;
  }

}
