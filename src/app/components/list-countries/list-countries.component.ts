import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  @Input() countries:any[]=[];
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectCountry(country:any){
    this.selectedCountry.emit(country);
  }
}
