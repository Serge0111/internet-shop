import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  @Input() allCart;
  public cartIcon = '../../assets/images/cart-icon.png';
  constructor() { }
  public cartSwitcher = false;
  public switchCart() {
    this.cartSwitcher = !this.cartSwitcher;
  }
  ngOnInit() {
  }

}
