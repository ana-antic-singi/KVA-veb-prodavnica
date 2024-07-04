import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  orders: { cartItems: { product: Product, count: number }[], totalPrice: number } [] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orders$.subscribe(data => {
      this.orders = data;
    });
  }
}
