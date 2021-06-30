import { Delivery } from './../../models/Delivery';
import { DeliveryService } from './../../services/delivery.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from './../../directives/sortable.directive';
import { Observable } from 'rxjs';
import { Country } from './../../models/Country';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.scss'],
})
export class ListDeliveriesComponent implements OnInit {
  @Output() deliverySelected: EventEmmiter<Delivery> =
    new EventEmmiter<Delivery>();
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
    s;
  }
}
