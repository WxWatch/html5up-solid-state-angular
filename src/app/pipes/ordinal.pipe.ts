import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let suffix = '';
    const last = value % 10;
    const specialLast = value % 100;
    if (!value || value < 1) {
      return value;
    }
    if (last === 1 && specialLast !== 11) {
      suffix = 'st';
    } else if (last === 2 && specialLast !== 12) {
      suffix = 'nd';
    } else if (last === 3 && specialLast !== 13) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return value + suffix;
  }

}
