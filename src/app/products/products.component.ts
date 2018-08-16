import { CartComponent } from './../cart/cart.component';
import { getAllproducts } from './../store/selectors/products.selector';
import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store';
import * as ProductsAction from '../store/actions/get-products-actions';
import * as Cart from '../store/actions/cart-actions';
import * as Reducers from '../store/reducers/index';
import * as _ from '../interfaces/products-interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public products: Observable<_.Products[]>;

  constructor(
    private cartService: CartService,
    private store: Store<Reducers.State>
  ) {}

  ngOnInit() {
    this.getProducts();
    this.products = this.store.select(getAllproducts);
  }
  public throwIntoCart(product: _.Products): void {
   // this.cartService.throwIntoCart(product);
    // this.store.dispatch(new Cart.ThrowIntoCart(product));
    this.cartService.addToCart(product);
    CartComponent.updateUserStatus.next(true);
  }
  public getProducts(): void {
    this.store.dispatch(new ProductsAction.GetProducts(true) );
  }
}
