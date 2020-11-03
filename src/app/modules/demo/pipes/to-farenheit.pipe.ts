import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * (9 / 5) + 32;
  }

}
