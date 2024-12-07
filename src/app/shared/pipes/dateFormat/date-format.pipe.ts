import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string): string {
    const date = typeof value === 'string' ? new Date(value) : value;

    if (!date || isNaN(date.getTime())) {
      return "";
    }

    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long'});
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

}
