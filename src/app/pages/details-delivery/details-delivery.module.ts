import { SharedModule } from './../../shared/shared.module';
import { CountryInfoComponent } from './../../components/country/country-info/country-info.component';
import { DeliveryInfoComponent } from './../../components/delivery/delivery-info/delivery-info.component';
import { DetailsDeliveryRoutingModule } from './details-delivery.routing.module';
import { DetailsDeliveryComponent } from './details-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DetailsDeliveryComponent,
    DeliveryInfoComponent,
    CountryInfoComponent
  ],
  imports: [
    FormsModule,
    SharedModule,                     
    CommonModule,
    ReactiveFormsModule,
    DetailsDeliveryRoutingModule,   
    NgbPaginationModule,
    NgbModule, 
  ]
})
export class DetailsDeliveryModule { }
