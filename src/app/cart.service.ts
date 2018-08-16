import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = window.localStorage;
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
*/

  /*public allSum () {
    let sum = this.cart.getItem('Cart');
    let money = 0;
    sum = JSON.parse(sum);
    if (Array.isArray(sum)) {
      sum.forEach( elem => {
        money = money + elem.price * elem.amount;
      });
    }
    return money;
  }*/
  public addToCart(data) {
    if (this.cart.getItem('Cart') === null) {
      this.cart.setItem('Cart', JSON.stringify([data]));
    } else {
      let datas = this.cart.getItem('Cart');
      datas = JSON.parse(datas);
      if (Array.isArray(datas)) {
        if (datas.filter( product => product.id === data.id).length) {
          return;
        }
        data = [...datas, data];
        this.cart.setItem('Cart', JSON.stringify(data));
      }
    }
  }

  public getCart() {
      return JSON.parse(this.cart.getItem('Cart'));
  }

  public clearAll () {
    this.cart.clear();
  }

  public removeFormCart(cartId) {
    let product = this.cart.getItem('Cart');
    let cart = [];
    product = JSON.parse(product);
    if ( Array.isArray(product)) {
      cart = product.filter( item => item.id !== cartId);
      console.log('===');
      console.log(cart);
      this.cart.setItem('Cart', JSON.stringify(cart));
    }
  }

  public productAmount(cart, action) {
    let product = this.cart.getItem('Cart');
    let carts = [];
    product = JSON.parse(product);
    if ( Array.isArray(product)) {
      console.log( product);
     carts = product.map( item => {
        if (item.id === cart.id) {
          if (action.op === 'minus') {
            if (item.amount === 1) {
              return item;
            }
            --item.amount;
          } else {
            ++item.amount;
          }
          return item;
        }
        return item;
      });
    }
    console.log( carts );
   this.cart.setItem('Cart', JSON.stringify(carts));

  }
  constructor() { }
}
