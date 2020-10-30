import { Pipe, PipeTransform } from '@angular/core';
import { CategoryType } from '../models/enums';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(value: CategoryType): string {
    return CategoryType[value];
  }

}
