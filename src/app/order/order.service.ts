import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersSubject = new BehaviorSubject<{ cartItems: { product: Product, count: number }[], totalPrice: number }[]>([]);
  orders$ = this.ordersSubject.asObservable();

  addOrder(order: { cartItems: { product: Product, count: number }[], totalPrice: number }): void {
    const currentOrders = this.ordersSubject.value;
    this.ordersSubject.next([...currentOrders, order]);
  }
}
