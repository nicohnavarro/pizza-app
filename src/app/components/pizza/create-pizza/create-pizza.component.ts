import { PizzaService } from './../../../services/pizza.service';
import { Pizza } from './../../../models/Pizza';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pizzaState } from 'src/app/enums/pizzaState';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.scss'],
})
export class CreatePizzaComponent implements OnInit {
  @Output()successfullyCreated:EventEmitter<boolean> = new EventEmitter<boolean>();
  formRegisterPizza: FormGroup = new FormGroup({});
  nameFormCtrl: FormControl;
  priceFormCtrl: FormControl;
  weightFormCtrl: FormControl;
  ingredientsFormCtrl: FormControl;
  pizzaStates=pizzaState;
  isLoading: boolean = false;

  constructor(private pizzaSvc:PizzaService) {
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
    let pizza = {
      name:this.nameFormCtrl.value,
      price:this.priceFormCtrl.value,
      weight:this.weightFormCtrl.value,
      ingredients:this.ingredientsFormCtrl.value,
      state:this.pizzaStates.CREATED
    } as Pizza;
    this.pizzaSvc.addPizza(pizza).then(()=>{
      this.successfullyCreated.emit(true);
      this.isLoading=false;
    }).catch((err)=>{
      this.successfullyCreated.emit(false);
      this.isLoading=false;
    });
  }
}
