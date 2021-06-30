import { Delivery } from './../../../models/Delivery';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit {

  @Input() delivery:Delivery | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
