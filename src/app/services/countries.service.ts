import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries:string = 'https://restcountries.eu/rest/v2/region/';
  constructor(private http: HttpClient) { }
 
  getCountries(region:string){
    return this.http.get<any>(this.countries+region);
  }
}
