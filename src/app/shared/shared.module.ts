import { ListPizzasComponent } from './../components/pizza/list-pizzas/list-pizzas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ListDeliveriesComponent } from './../components/delivery/list-deliveries/list-deliveries.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,  
  ],
  declarations: [ListDeliveriesComponent,ListPizzasComponent],
  exports: [
    ListDeliveriesComponent,
    ListPizzasComponent,
    CommonModule,
    NgbPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }