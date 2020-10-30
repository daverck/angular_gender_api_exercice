import { Pipe, PipeTransform } from '@angular/core';
import { StateType } from '../models/enums/state-type.enum';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: StateType): string {
    return StateType[value];
  }

}
