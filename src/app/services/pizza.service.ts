import { Injectable } from '@angular/core';
import { Pizza } from '../models/Pizza';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { pizzaState } from '../enums/pizzaState';
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private db: AngularFirestore) {}

  getPizzas(): Observable<Pizza[]> {
    return this.db.collection<Pizza>('pizzas').valueChanges({ idField: 'id' });
  }

  addPizza(pizza: Pizza): Promise<DocumentReference<Pizza>> {
    return this.db.collection<Pizza>('pizzas').add(pizza);
  }

  updatePizza(pizza: Pizza, id: string | undefined): Promise<void> {
    return this.db.collection<Pizza>('pizzas').doc(id).set(pizza);
  }

  deletePizza(pizza: Pizza, id: string | undefined): Promise<void> {
      pizza.state = pizzaState.DELETED;
      return this.db.collection<Pizza>('pizzas').doc(id).set(pizza);
    }
}
