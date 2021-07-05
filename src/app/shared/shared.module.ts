import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ListPizzasComponent } from './../components/pizza/list-pizzas/list-pizzas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ListDeliveriesComponent } from './../components/delivery/list-deliveries/list-deliveries.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
  ],
  declarations: [ListDeliveriesComponent,ListPizzasComponent],
  exports: [
    ListDeliveriesComponent,
    ListPizzasComponent,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
  ]
})
export class SharedModule { }