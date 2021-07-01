import { pizzaState } from '../enums/pizzaState';

export interface Pizza {
  id?: string;
  name: string;
  price: number;
  weight: number;
  ingredients: string;
  state: pizzaState;
}
