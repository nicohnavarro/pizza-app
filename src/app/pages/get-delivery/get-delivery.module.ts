import { SharedModule } from './../../shared/shared.module';
import { OrderInfoComponent } from './../../components/order/order-info/order-info.component';
import { GetDeliveryRoutingModule } from './get-delivery.routing.module';
import { GetDeliveryComponent } from './get-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GetDeliveryComponent,OrderInfoComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    GetDeliveryRoutingModule,                 
    SharedModule       
  ]
})
export class GetDeliveryModule { }
