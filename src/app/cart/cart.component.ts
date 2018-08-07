import { Component, OnInit, Input } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public allCart = [];
  public cartIcon = '../../assets/images/cart-icon.png';
  constructor(
    private productCartService: ProductCartService
  ) { }
  public cartSwitcher = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }

  public getCart() {
    this.allCart = this.productCartService.getCart();
  }

  public removeFromCart(cartId) {
    this.productCartService.removeFormCart(cartId);
    this.allCart = this.productCartService.getCart();
  }

  public productAmount(cart, action) {
    this.productCartService.productAmount(cart, action);
  }
  ngOnInit() {
    this.getCart();
  }

}
