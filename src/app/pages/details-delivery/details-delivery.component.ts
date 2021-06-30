import { Delivery } from './../../models/Delivery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-delivery',
  templateUrl: './details-delivery.component.html',
  styleUrls: ['./details-delivery.component.scss']
})
export class DetailsDeliveryComponent implements OnInit {

  selectedDelivery:Delivery | undefined;
  constructor() { 
  }

  ngOnInit(): void {
  }

  getSelectedDelivery(delivery:Delivery){this.selectedDelivery = delivery;}
}