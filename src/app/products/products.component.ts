import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  @Input() products;
  @Output() intoCart: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public throwIntoCart(data) {
    this.intoCart.emit(data);
  }

}
