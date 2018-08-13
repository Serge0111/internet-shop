import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLive'
})
export class SearchLivePipe implements PipeTransform {

  transform(products: any, args?: any): any {
    let product = 0;
    let str = args[0] || '';
    str = str.replace(/^\s*/, '').replace(/\s*$/, '').toLowerCase();
    if (args[1] === 'all') {
      product = products.filter( field =>
        String(field.name).toLowerCase().indexOf(str) !== -1 ||
        String(field.brand).toLowerCase().indexOf(str) !== -1 ||
        String(field.item).toLowerCase().indexOf(str) !== -1 ||
        String(field.price).toLowerCase().indexOf(str) !== -1);
    } else {
      product = products.filter( field => String(field[args[1]]).toLowerCase().indexOf(str) !== -1 );
    }
    return str ? product :  null;
  }

}
