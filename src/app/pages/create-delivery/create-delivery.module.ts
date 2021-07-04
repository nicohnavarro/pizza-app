import { FormDeliveryComponent } from './../../components/delivery/form-delivery/form-delivery.component';
import { CreateDeliveryRoutingModule } from './create-delivery.routing.module';
import { CreateDeliveryComponent } from './create-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCountriesComponent } from 'src/app/components/country/list-countries/list-countries.component';

@NgModule({
  declarations: [CreateDeliveryComponent,ListCountriesComponent,FormDeliveryComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CreateDeliveryRoutingModule,                             
  ]
})
export class CreateDeliveryModule { }
