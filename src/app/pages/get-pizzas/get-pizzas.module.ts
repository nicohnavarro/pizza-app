import { DeletePizzaComponent } from './../../components/pizza/delete-pizza/delete-pizza.component';
import { UpdatePizzaComponent } from './../../components/pizza/update-pizza/update-pizza.component';
import { CreatePizzaComponent } from './../../components/pizza/create-pizza/create-pizza.component';
import { GetPizzasRoutingModule } from './get-pizzas.routing.module';
import { GetPizzasComponent } from './get-pizzas.component';
import { ListPizzasComponent } from './../../components/pizza/list-pizzas/list-pizzas.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GetPizzasComponent,CreatePizzaComponent,UpdatePizzaComponent,DeletePizzaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    GetPizzasRoutingModule,                 
    SharedModule       
  ]
})
export class GetPizzasModule { }
