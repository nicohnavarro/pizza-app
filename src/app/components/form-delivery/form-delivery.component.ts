import { DeliveryService } from './../../services/delivery.service';
import { Delivery } from './../../models/Delivery';
import { Country } from './../../models/Country';
import { CountriesService } from './../../services/countries.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-delivery',
  templateUrl: './form-delivery.component.html',
  styleUrls: ['./form-delivery.component.scss']
})
export class FormDeliveryComponent implements OnInit {
  continentType = '';
  countries: any[] = [];
  @Input() country: Country | undefined;
  formRegisterDelivery: FormGroup = new FormGroup({});
  nameFormCtrl: FormControl;
  ageFormCtrl: FormControl;
  quantityFormCtrl: FormControl;
  countryFormCtrl: FormControl;
  isTipsChecked: boolean = false;
  isLoading: boolean = false;
  @Output() selectedRegion: EventEmitter<Country[]> = new EventEmitter();
  @Output() successfullyAdded: EventEmitter<boolean> = new EventEmitter();

  constructor(private countrySvc: CountriesService,private deliverySvc:DeliveryService) {
    this.nameFormCtrl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/),]);
    this.ageFormCtrl = new FormControl('', [Validators.required,Validators.max(65),Validators.min(18)]);
    this.quantityFormCtrl = new FormControl('', [Validators.required,Validators.max(25),Validators.min(1)]);
    this.countryFormCtrl = new FormControl('', [Validators.required]);
    this.formRegisterDelivery.addControl('Name', this.nameFormCtrl);
    this.formRegisterDelivery.addControl('Age', this.ageFormCtrl);
    this.formRegisterDelivery.addControl('QuantityProd', this.quantityFormCtrl);
    this.formRegisterDelivery.addControl('Country', this.countryFormCtrl);
  }

  ngOnInit(): void {
  }

  ngOnChanges(change: any) {
    this.countryFormCtrl.setValue(this.country?.name)
  }

  onChange(event: string) {
    this.countrySvc.getCountries(event).subscribe((data) => {
      let countries = data.map((country)=>{return {'name':country.name,'region':country.region,'flag':country.flag,'area':country.area,'population':country.population}})
      this.selectedRegion.emit(countries);
    })
  }

  onSubmit() {
    this.isLoading = true;
    let delivery = {
      name:this.nameFormCtrl.value,
      age:this.ageFormCtrl.value,
      carryQuantity:this.quantityFormCtrl.value,
      country:this.country,
      canRecivedTips:this.isTipsChecked
    } as Delivery;
    this.deliverySvc.addDelivery(delivery).then(()=>{
      this.successfullyAdded.emit(true);
      this.isLoading=false;
    });
  }

}
