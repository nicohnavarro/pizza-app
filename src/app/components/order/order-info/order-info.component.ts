import { Pizza } from './../../../models/Pizza';
import { Delivery } from './../../../models/Delivery';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  @Input() delivery:Delivery | undefined;
  @Input() pizzas:Pizza[] =[];
  @Input()total:number=0;
  constructor() { }

  ngOnChanges(change: any) {
    if(this.pizzas.length > 0){
      this.total = this.pizzas.map(pizza => pizza.price).reduce((a,b)=>a+b,0);
      console.log(this.total);
    }
  }


  ngOnInit(): void {
  }

}
