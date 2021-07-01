import { Pizza } from './../../models/Pizza';
import { Component, OnInit } from '@angular/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-get-pizzas',
  templateUrl: './get-pizzas.component.html',
  styleUrls: ['./get-pizzas.component.scss']
})
export class GetPizzasComponent implements OnInit {

  notyf = new Notyf();
  deletePizza:Pizza | undefined;
  editPizza:Pizza | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  createdPizza(result:boolean){
    result?
    this.notyf.success('Pizza Created! 🍕') : 
    this.notyf.error('Error creating Pizza');
  }

  editedPizza(result:boolean){
    if(result){
      this.notyf.success('Pizza Updated! 🍕✏️');
      this.editPizza = undefined;
    }
    else{
      this.notyf.error('Error creating Pizza');
    }
  }

  deletedPizza(result:boolean){
    if(result){
      this.notyf.error('Pizza Deleted! 🍕✏️');
      this.deletePizza = undefined;
    }
    else{
      this.notyf.error('Error deleting Pizza');
    }
  }

  getSelectedPizzaToEdit(pizza:Pizza){this.editPizza = pizza;}
  getSelectedPizzaToDelete(pizza:Pizza){this.deletePizza = pizza;}

}
