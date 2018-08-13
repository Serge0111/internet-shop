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
  public pickedCategory: string;
  public opened = false;

  public toSortBy() {
    this.objectKeys = this.productCartService.toSortBy();
  }

  public searchDataBy(findBy) {
    this.searchLiveData = findBy;
  }

  public getFieldToSortBy(sort, ref) {
    this.sort = this.productCartService.getFieldToSortBy(sort);
    console.log(this.sort);
    this.pickedCategory = sort;
    this.openCategory();
    console.log(ref.target.innerHTML);
  }

  public getProducts() {
    this.productCartService.getProducts()
      .subscribe(products => products['products']
        .map(product => this.products.push(product))
      );
  }
  public openCategory() {
    this.opened = !this.opened;
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
