import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthCheck',
})
export class Lengthcheckpipe implements PipeTransform {
  transform(value: string, maxLength: number = 10): string {
    if (!value) {
      return value;
    }
    return value.length <= maxLength ? value :value.substring(0,maxLength)+'.....'
  }
}
