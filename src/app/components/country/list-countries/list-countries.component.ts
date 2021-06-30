import { Country } from './../../../models/Country';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  @Input() countries:Country[]=[];
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectCountry(country:Country){
    this.selectedCountry.emit(country);
  }
}
