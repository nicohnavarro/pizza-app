import { CountriesService } from './../../services/countries.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-delivery',
  templateUrl: './form-delivery.component.html',
  styleUrls: ['./form-delivery.component.scss']
})
export class FormDeliveryComponent implements OnInit {
  continentType='';
  countries:any[]=[];
  name:FormControl= new FormControl('');

  country:FormControl= new FormControl('');
  @Output() selectedRegion:EventEmitter<any>= new EventEmitter();
  constructor(private countrySvc:CountriesService) { }

  ngOnInit(): void {
  }

  onChange(event:string){
    this.countrySvc.getCountries(event).subscribe((data)=>{
      this.selectedRegion.emit(data);
    })
  }
}
