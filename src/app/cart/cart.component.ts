import { Product } from './../store/actions/cart-actions';
import { Products } from '../interfaces/products-interface';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducers from '../store/reducers/index';
import * as Cart from '../store/actions/cart-actions';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {
  public static updateUserStatus = new Subject();
  public carts: Products[];
  public cartIcon = '../../assets/images/cart-icon.png';
  public sum: number;
  public goodNumber: number;
  constructor(
    private cartService: CartService,
    private store: Store<Reducers.State>
  ) {
    CartComponent.updateUserStatus.subscribe( () => {
      this.getCart();
    });
  }
  public cartSwitcher = false;
  public empty: number | boolean = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }

  public getCart() {
    this.carts = this.cartService.getCart();
    this.thowAll();
  }
  public productAmount (product, action) {
    this.cartService.productAmount(product, action);
    this.reRender();
    this.thowAll();
  }
  public removeFromCart(cartId) {
    this.store.dispatch(new Cart.RemoveFromCart(cartId));
    this.cartService.removeFormCart(cartId);
    this.reRender();
  }
  public reRender () {
    this.ngOnInit();
  }
  public thowAll() {
    this.store.dispatch( new Cart.ThrowAllIntoCart(this.cartService.getCart()));
  }
  public summaAndAmount() {
    this.sum = this.cartService.allSum();
    this.goodNumber = this.cartService.amount();
  }
  ngOnInit() {
    // this.cartService.clearAll();
   // this.store.dispatch( new Cart.ThrowAllIntoCart(this.cartService.getCart()));
   this.summaAndAmount();
    this.getCart();
    console.log(this.sum);
  }

}
