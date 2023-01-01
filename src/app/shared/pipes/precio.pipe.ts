import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
})
export class PrecioPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined || null) return '';
    const regex = /^\d+(\.\d{2})?$/;

    if (regex.test(value?.toString())) {
      return value + ' €';
    } else {
      return value + '0 €';
    }
  }
}
