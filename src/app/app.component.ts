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
      item: 1123,
      brand: 'Fromental',
      price: 1010,
      amount: 1,
      image: '../assets/images/wall-paper1.png'
    },
    {
      id: 2,
      item: 1152,
      brand: 'Fromental',
      price: 1000,
      amount: 1,
      image: '../assets/images/wall-paper2.png'
    },
    {
      id: 3,
      item: 1623,
      brand: 'Fromental',
      price: 2000,
      amount: 1,
      image: '../assets/images/wall-paper3.png'
    },
    {
      id: 4,
      item: 1463,
      brand: 'Fromental',
      price: 4200,
      amount: 1,
      image: '../assets/images/wall-paper4.png'
    },
    {
      id: 5,
      item: 1723,
      brand: 'Fromental',
      price: 7300,
      amount: 1,
      image: '../assets/images/wall-paper4.png'
    },
    {
      id: 6,
      item: 1923,
      brand: 'Fromental',
      price: 8000,
      amount: 1,
      image: '../assets/images/wall-paper5.png'
    },
    {
      id: 7,
      item: 1463,
      brand: 'Fromental',
      price: 4200,
      amount: 1,
      image: '../assets/images/wall-paper4.png'
    },
    {
      id: 8,
      item: 1723,
      brand: 'Fromental',
      price: 7300,
      amount: 1,
      image: '../assets/images/wall-paper4.png'
    },
    {
      id: 9,
      item: 1923,
      brand: 'Fromental',
      price: 8000,
      amount: 1,
      image: '../assets/images/wall-paper5.png'
    }
  ];
  public cart = [];
  public intoCartArray(data) {
    this.cart.push(data);
  }
}
