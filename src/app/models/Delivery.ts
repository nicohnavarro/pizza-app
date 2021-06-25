import { Country } from './Country';
export interface Delivery {
  name:string;
  age:number;
  carryQuantity:number;
  country:Country;
  canRecivedTips:boolean
}