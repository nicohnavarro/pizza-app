import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.scss'],
})
export class CreatePizzaComponent implements OnInit {
  formRegisterPizza: FormGroup = new FormGroup({});
  nameFormCtrl: FormControl;
  priceFormCtrl: FormControl;
  weightFormCtrl: FormControl;
  ingredientsFormCtrl: FormControl;
  isLoading: boolean = false;

  constructor() {
    this.nameFormCtrl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]*$/),
    ]);
    this.priceFormCtrl = new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.min(5),
    ]);
    this.weightFormCtrl = new FormControl('', [
      Validators.required,
      Validators.max(1000),
      Validators.min(500),
    ]);
    this.ingredientsFormCtrl = new FormControl('', [Validators.required]);
    this.formRegisterPizza.addControl('Name', this.nameFormCtrl);
    this.formRegisterPizza.addControl('Price', this.priceFormCtrl);
    this.formRegisterPizza.addControl('Weight', this.weightFormCtrl);
    this.formRegisterPizza.addControl('Ingredients', this.ingredientsFormCtrl);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
  }
}
