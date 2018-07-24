import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public emblem = '../../assets/images/gluts.png'; 
  public phoneNumber = '../../assets/images/phone-number.png';

  constructor() { }

  ngOnInit() {
  }

}
