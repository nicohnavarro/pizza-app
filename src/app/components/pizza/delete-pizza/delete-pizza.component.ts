import { PizzaService } from './../../../services/pizza.service';
import { Pizza } from './../../../models/Pizza';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-pizza',
  templateUrl: './delete-pizza.component.html',
  styleUrls: ['./delete-pizza.component.scss']
})
export class DeletePizzaComponent implements OnInit {
  @Output() successfullyDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  pizzaToDelete: Pizza | undefined;
  isLoading: boolean = false;
  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit(): void {
  }

  deletePizza() {
    this.isLoading = true;
    let pizza = {
      ...this.pizzaToDelete
    } as Pizza;
    this.pizzaSvc.deletePizza(pizza, pizza.id).then(() => {
      this.successfullyDeleted.emit(true);
      this.isLoading = false;
    }).catch((err) => {
      this.successfullyDeleted.emit(false);
      this.isLoading = false;
    });
  }
}
