import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../product/product.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, count: number }[] = [];
  isLoggedIn: boolean = false;
  constructor (
      private cartService: CartService,
      private router: Router,
      private authService: AuthService,
      private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.authService.loggedInStatus.subscribe(status => {
      this.isLoggedIn = status;
  });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getTotalPrice(cartItems: { product: Product, count: number }[]): number {
    return cartItems.reduce((total, item) => total + item.product.price * item.count, 0);
  }

  openCheckoutDialog(){
    if (!this.isLoggedIn) { 
      this.router.navigate(['/login']);
    } else {
      const totalPrice = this.getTotalPrice(this.cartItems);
      this.dialog.open(CheckoutDialogComponent, {
        data: { cartItems: this.cartItems, totalPrice: totalPrice }
      });
    }
  }

}
