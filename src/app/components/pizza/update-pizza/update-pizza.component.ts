import { PizzaService } from './../../../services/pizza.service';
import { Pizza } from './../../../models/Pizza';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pizzaState } from 'src/app/enums/pizzaState';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.scss'],
})
export class UpdatePizzaComponent implements OnInit {
  @Output()successfullyEdited:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input()pizzaToEdit:Pizza | undefined;
  formRegisterPizza: FormGroup = new FormGroup({});
  nameFormCtrl: FormControl;
  priceFormCtrl: FormControl;
  weightFormCtrl: FormControl;
  ingredientsFormCtrl: FormControl;
  pizzaStates=pizzaState;
  isLoading: boolean = false;

  constructor(private pizzaSvc:PizzaService) {
    this.nameFormCtrl = new FormControl();
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

  ngOnChanges(change: any) {
    this.nameFormCtrl.setValue(this.pizzaToEdit?.name);
    this.priceFormCtrl.setValue(this.pizzaToEdit?.price);
    this.weightFormCtrl.setValue(this.pizzaToEdit?.weight);
    this.ingredientsFormCtrl.setValue(this.pizzaToEdit?.ingredients);
  }


  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    let pizza = {
      ...this.pizzaToEdit,
      price:this.priceFormCtrl.value,
      weight:this.weightFormCtrl.value,
      ingredients:this.ingredientsFormCtrl.value,
      state:this.pizzaStates.EDITED
    } as Pizza;
    this.pizzaSvc.updatePizza(pizza,pizza.id).then(()=>{
      this.successfullyEdited.emit(true);
      this.isLoading=false;
      this.pizzaToEdit=undefined;
    }).catch((err)=>{
      this.successfullyEdited.emit(false);
      this.isLoading=false;
    });
  }
}
