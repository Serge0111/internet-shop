import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  /*public throwIntoCart(product) {
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
  }*/
  constructor() { }
}
