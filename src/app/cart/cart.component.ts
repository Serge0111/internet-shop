import { Products } from '../interfaces/products-interface';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducers from '../store/reducers/index';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public allCart = [];
  public carts: Observable<Products[]>;
  public cartIcon = '../../assets/images/cart-icon.png';
  constructor(
    private cartService: CartService,
    private store: Store<Reducers.State>
  ) { }
  public cartSwitcher = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }

  public getCart() {
    this.allCart = this.cartService.getCart();
    this.carts = this.store.select(item => item.Cart.products);

  }

 /* public removeFromCart(cartId) {
    this.cartService.removeFormCart(cartId);
    this.allCart = this.cartService.getCart();
  }

  public productAmount(cart, action) {
    this.cartService.productAmount(cart, action);
  }*/
  ngOnInit() {
    this.getCart();
  }

}
