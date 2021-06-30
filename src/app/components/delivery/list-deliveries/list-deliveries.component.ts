import { DeliveryService } from './../../../services/delivery.service';
import { NgbdSortableHeader } from './../../../directives/sortable.directive';
import { Delivery } from './../../../models/Delivery';
import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.scss'],
})
export class ListDeliveriesComponent implements OnInit {
  @Output() deliverySelected: EventEmitter<Delivery> =
    new EventEmitter<Delivery>();
  deliveries: Delivery[] = [];

  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | undefined;

  constructor(private deliverySvc: DeliveryService) {
    this.deliverySvc.getDeliveries().subscribe((data) => {
      this.deliveries = data;
    });
  }

  ngOnInit(): void {}
  onSort(event: any) {}

  selectDelivery(delivery: Delivery) {
    this.deliverySelected.emit(delivery);
  }
}
