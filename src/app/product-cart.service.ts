import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  public searchBy = [{
    'По умолчанию': 'all'
  },
  {
    'Названию': 'item'
  },
  {
    'Артикулу': 'brand'
  },
  {
    'Бренду' : 'price'
  }
  ];
  private objectKeys = [];
  private cart = [];

  constructor(
    private http: HttpClient
  ) { }
  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('../assets/data/db.json');
  }

  public toSortBy () {
    for (let i = 0; i < this.searchBy.length; i++ ) {
      this.objectKeys.push( Object.keys(this.searchBy[i])[0] );
    }
    return this.objectKeys;
  }

  public getFieldToSortBy(sort) {
    return this.searchBy.filter(search => search[sort])[0][sort];
  }

  // Cart
  public throwIntoCart(product) {
    let theSameProduct = 0;
    theSameProduct = this.cart.find( item => {
      if (item.id === product.id) {
        ++item.amount;
        return true;
      }
    });
    if (theSameProduct) {
      return;
    }
    this.cart.push(product);
  }

  public getCart() {
    return this.cart;
  }

  public removeFormCart(cartId) {
    this.cart = this.cart.filter( product => product.id !== cartId);
  }

  public productAmount(cart, action) {
    this.cart.find( item => {
      if (item.id === cart.id) {
        if (action.op === 'minus') {
          if (item.amount === 1) {
            return true;
          }
          --item.amount;
        } else {
          ++item.amount;
        }
        return true;
      }
    });
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
