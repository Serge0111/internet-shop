import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  @Input() allCart;
  public price = 0;
  public cartIcon = '../../assets/images/cart-icon.png';
  constructor() { }
  public cartSwitcher = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }
  public removeFromCart(i, allCart) {
    allCart.splice(i, 1);
  }
  public outputPrice(allCart) {
    for ( let i = 0; i < allCart.length; i++) {
      this.price += allCart[i].price;
      return this.price;
    }
  }

  ngOnInit() {
  }

}
