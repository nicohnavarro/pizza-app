import { Country } from './../../models/Country';
import { Component, OnInit } from '@angular/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.scss']
})
export class CreateDeliveryComponent implements OnInit {

  listCountries:any[]=[];
  country:Country | undefined;
  notyf = new Notyf();
  constructor() { }

  ngOnInit(): void {
  }

  getRegion(countries:any[]){
    this.listCountries = countries
  }

  setCountry(country:Country){
    this.country = country;
  }

  deliveryAdded(isAdded:boolean){
    isAdded ? 
    this.notyf.success('Delivery added') : 
    this.notyf.error('We can not add Delivery');
  }

}
