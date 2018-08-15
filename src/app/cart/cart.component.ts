import { Products } from '../interfaces/products-interface';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducers from '../store/reducers/index';
import * as Cart from '../store/actions/cart-actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public carts: Observable<Products[]>;
  public cartIcon = '../../assets/images/cart-icon.png';
  constructor(
    private cartService: CartService,
    private store: Store<Reducers.State>
  ) { }
  public cartSwitcher = false;
  public empty: number | boolean = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }

  public getCart() {
    this.carts = this.store.select(item => item.Cart.products);
  }

  public removeFromCart(cartId) {
    this.store.dispatch(new Cart.RemoveFromCart(cartId));
    // this.cartService.removeFormCart(cartId);
  }
  public isEmpty () {
    this.carts.subscribe( (data: Products[]) => this.empty = data.length);
  }

  ngOnInit() {
    this.getCart();
    this.isEmpty();
    console.log(this.empty);
  }

}
