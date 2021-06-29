import { Delivery } from './../models/Delivery';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private db:AngularFirestore) { }

  getDeliveries(): Observable<Delivery[]> {
    return this.db.collection<Delivery>('deliveries').valueChanges({idField: 'id'});
  }

  addDelivery(delivery: Delivery): Promise<DocumentReference<Delivery>> {
    return this.db.collection<Delivery>('deliveries').add(delivery);
  }

  updateDelivery(delivery:Delivery,id:string): Promise<void>{
    return this.db.collection<Delivery>('deliveries').doc(id).set(delivery);
  }

}