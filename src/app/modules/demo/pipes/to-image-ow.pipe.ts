import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toImageOW'
})
export class ToImageOWPipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): string {

    return "http://openweathermap.org/img/wn/" + value + "@"+ args[0] +"x.png";
  }

}
