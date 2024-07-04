import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsMap = new Map<Product, number>();
  private cartItemsSubject = new BehaviorSubject<{ product: Product, count: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product) {
    if (this.cartItemsMap.has(product)) {
      this.cartItemsMap.set(product, this.cartItemsMap.get(product)! + 1);
    } else {
      this.cartItemsMap.set(product, 1);
    }
    this.updateCartItems();
  }

  removeFromCart(product: Product) {
    if (this.cartItemsMap.has(product)) {
      const count = this.cartItemsMap.get(product)!;
      if (count > 1) {
        this.cartItemsMap.set(product, count - 1);
      } else {
        this.cartItemsMap.delete(product);
      }
      this.updateCartItems();
    }
  }


  private updateCartItems() {
    const items = Array.from(this.cartItemsMap.entries()).map(([product, count]) => ({ product, count }));
    this.cartItemsSubject.next(items);
  }

}
