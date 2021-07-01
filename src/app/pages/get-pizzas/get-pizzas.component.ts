import { Component, OnInit } from '@angular/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-get-pizzas',
  templateUrl: './get-pizzas.component.html',
  styleUrls: ['./get-pizzas.component.scss']
})
export class GetPizzasComponent implements OnInit {

  notyf = new Notyf();
  constructor() { }

  ngOnInit(): void {
  }

  createdPizza(result:boolean){
    result?
    this.notyf.success('Pizza Created! 🍕') : 
    this.notyf.error('Error creating Pizza');
  }

}
