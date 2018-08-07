import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public products = [];
  constructor(
    private productCartService: ProductCartService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  public throwIntoCart(product) {
    this.productCartService.throwIntoCart(product);
  }
  public getProducts() {
    this.productCartService.getProducts()
      .subscribe(products => products['products']
        .map(product => this.products.push(product))
      );
  }
}
interface Products {
  id: number;
  name: string;
  item: 1123;
  brand: string;
  price: 1010;
  amount: 1;
  image: string;
}
