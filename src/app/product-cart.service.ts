import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as ProductsInterface from './interfaces/products-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  public searchBy = [{
    'По умолчанию': 'all'
  },
  {
    'Названию': 'name'
  },
  {
    'Артикулу': 'item'
  },
  {
    'Бренду' : 'brand'
  }
  ];
  private objectKeys = [];

  constructor(
    private http: HttpClient
  ) { }
  public getProducts(): Observable<ProductsInterface.Products[]> {
    return this.http.get<ProductsInterface.Products[]>('../assets/data/db.json');
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
}

