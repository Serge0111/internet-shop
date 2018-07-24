import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  public products = [
    {
      id: 1,
      articul: 1123,
      brand: 'Fromental',
      price: 1010
    },
    {
      id: 1,
      articul: 1152,
      brand: 'Fromental',
      price: 1000
    },
    {
      id: 1,
      articul: 1623,
      brand: 'Fromental',
      price: 2000
    },
    {
      id: 1,
      articul: 1463,
      brand: 'Fromental',
      price: 4200
    },
    {
      id: 1,
      articul: 1723,
      brand: 'Fromental',
      price: 7300
    },
    {
      id: 1,
      articul: 1923,
      brand: 'Fromental',
      price: 8000
    }
  ];
  public cart = [];
  public intoCartArray(data) {
    this.cart.push(data);
  }
}
