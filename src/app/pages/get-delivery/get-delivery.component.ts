import { pizzaState } from './../../enums/pizzaState';
import { PizzaService } from './../../services/pizza.service';
import { Pizza } from './../../models/Pizza';
import { Delivery } from './../../models/Delivery';
import { Component, OnInit } from '@angular/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-get-delivery',
  templateUrl: './get-delivery.component.html',
  styleUrls: ['./get-delivery.component.scss']
})
export class GetDeliveryComponent implements OnInit {
  isDeliverySelected:boolean=false;
  selectedDelivery:Delivery | undefined;
  selectedPizzas:Pizza[] =[];
  totalPizzas:Pizza[] =[];
  quantity:number = 0;
  notyf:Notyf = new Notyf();
  total:number=0;

  constructor(private pizzaSvc: PizzaService) {
    this.pizzaSvc.getPizzas().subscribe((data) => {
      this.totalPizzas = data.filter(pizza => pizza.state !== pizzaState.DELETED);
    });
  }

  ngOnInit(): void {
  }


  addDelivery(delivery:Delivery){
    this.isDeliverySelected=true;
    this.selectedDelivery = delivery;
  }

  addPizza(pizza:Pizza){
    if(this.selectedDelivery){
      if(this.selectedDelivery.carryQuantity > 0){
        this.selectedPizzas.push(pizza);
        const index = this.totalPizzas.indexOf(pizza);
        if (index > -1) {
          this.totalPizzas.splice(index, 1);
        }
        this.selectedDelivery.carryQuantity = this.selectedDelivery.carryQuantity -1;
        if(this.selectedPizzas.length > 0){
          this.total = this.selectedPizzas.map(pizza => pizza.price).reduce((a,b)=>a+b,0);
        }
      }
      else{
        this.notyf.error("Sorry capacity exceeded ")
      }
    }
  }

}
