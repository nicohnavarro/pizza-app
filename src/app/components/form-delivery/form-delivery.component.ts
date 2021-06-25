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
  tipsFormCtrl: FormControl;
  isTipsChecked: boolean = false;
  isLoading: boolean = false;
  @Output() selectedRegion: EventEmitter<any> = new EventEmitter();

  constructor(private countrySvc: CountriesService) {
    this.nameFormCtrl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/),]);
    this.ageFormCtrl = new FormControl('', [Validators.required]);
    this.quantityFormCtrl = new FormControl('', [Validators.required]);
    this.countryFormCtrl = new FormControl('', [Validators.required]);
    this.tipsFormCtrl = new FormControl(true);
    this.formRegisterDelivery.addControl('Name', this.nameFormCtrl);
    this.formRegisterDelivery.addControl('Age', this.ageFormCtrl);
    this.formRegisterDelivery.addControl('QuantityProd', this.quantityFormCtrl);
    this.formRegisterDelivery.addControl('Country', this.countryFormCtrl);
    this.formRegisterDelivery.addControl('Tips', this.tipsFormCtrl);

  }

  ngOnInit(): void {
  }

  ngOnChanges(change: any) {
    console.log(change)
    this.countryFormCtrl.setValue(this.country?.name)
  }

  onChange(event: string) {
    this.countrySvc.getCountries(event).subscribe((data) => {
      this.selectedRegion.emit(data);
    })
  }

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
