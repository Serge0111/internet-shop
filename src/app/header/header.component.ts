import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public emblem = '../../assets/images/gluts.png'; 
  public phoneNumber = '../../assets/images/phone-number.png';
  public searchBy = [{
    'По умолчанию': 'all'
  },
  {
    'Названию': 'item'
  },
  {
    'Артикулу': 'brand'
  },
  {
    'Бренду' : 'price'
  }
  ];
  public objectKeys = [];
  public sort;
  public searchLiveData;
  @Output() searchData: EventEmitter<any> = new EventEmitter();
  @Input() products;
  public getObjectKeys() {
    for (let i = 0; i < this.searchBy.length; i++ ) {
      this.objectKeys.push( Object.keys(this.searchBy[i])[0] );
    }
  }
  public sendSearchData(searchDataOut) {
    this.searchLiveData = searchDataOut;
    this.searchData.emit(searchDataOut);
  }
  public getSorted(sort) {
    this.sort = this.searchBy.filter(search => search[sort])[0][sort];
    console.log(this.sort);
  }
  constructor() { }

  ngOnInit() {
    this.getObjectKeys();
    console.log(this.objectKeys);
  }

}
