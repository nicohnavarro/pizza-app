import { PizzaService } from './../../../services/pizza.service';
import { NgbdSortableHeader } from './../../../directives/sortable.directive';
import { Pizza } from './../../../models/Pizza';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { pizzaState } from 'src/app/enums/pizzaState';

@Component({
  selector: 'app-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.scss']
})
export class ListPizzasComponent implements OnInit {
  @Input() isForOrder: boolean = true;
  @Output() pizzaSelectedEdit: EventEmitter<Pizza> =
    new EventEmitter<Pizza>();
  @Output() pizzaSelectedDelete: EventEmitter<Pizza> =
    new EventEmitter<Pizza>();
  @Output() pizzaSelectedAdd: EventEmitter<Pizza> =
    new EventEmitter<Pizza>();
  pizzas: Pizza[] = [];

  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | undefined;

  constructor(private pizzaSvc: PizzaService) {
    this.pizzaSvc.getPizzas().subscribe((data) => {
      this.pizzas = data.filter(pizza => pizza.state !== pizzaState.DELETED);
    });
  }

  ngOnInit(): void { }
  onSort(event: any) { }

  editPizza(pizza: Pizza) {
    this.pizzaSelectedEdit.emit(pizza);
  }

  deletePizza(pizza: Pizza) {
    this.pizzaSelectedDelete.emit(pizza);
  }

  addPizzaToOrder(pizza: Pizza) {
    this.pizzaSelectedAdd.emit(pizza);
  }
}
