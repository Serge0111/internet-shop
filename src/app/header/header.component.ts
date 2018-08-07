import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public emblem = '../../assets/images/gluts.png';
  public phoneNumber = '../../assets/images/phone-number.png';
  public objectKeys = [];
  public sort;
  public searchLiveData;
  public products = [];

  public toSortBy() {
    this.objectKeys = this.productCartService.toSortBy();
  }

  public searchDataBy(findBy) {
    this.searchLiveData = findBy;
  }

  public getFieldToSortBy(sort) {
    this.sort = this.productCartService.getFieldToSortBy(sort);
    console.log(this.sort);
  }

  public getProducts() {
    this.productCartService.getProducts()
      .subscribe(products => products['products']
        .map(product => this.products.push(product))
      );
  }

  constructor(
    private productCartService: ProductCartService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.toSortBy();
    console.log(this.objectKeys);
  }


}
