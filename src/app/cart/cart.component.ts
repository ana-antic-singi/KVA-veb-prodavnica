import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, count: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
