import { DeletePizzaComponent } from './../../components/pizza/delete-pizza/delete-pizza.component';
import { UpdatePizzaComponent } from './../../components/pizza/update-pizza/update-pizza.component';
import { CreatePizzaComponent } from './../../components/pizza/create-pizza/create-pizza.component';
import { GetPizzasRoutingModule } from './get-pizzas.routing.module';
import { GetPizzasComponent } from './get-pizzas.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GetPizzasComponent,CreatePizzaComponent,UpdatePizzaComponent,DeletePizzaComponent],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    GetPizzasRoutingModule,                 
  ]
})
export class GetPizzasModule { }
