import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(product => String(product.item).indexOf(input) !== -1);
    }
    return value;
  }

}
