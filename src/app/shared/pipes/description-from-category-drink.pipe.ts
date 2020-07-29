import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionFromCategoryDrink'
})
export class DescriptionFromCategoryDrinkPipe implements PipeTransform {

  transform(value: { [k: string]: string }): unknown {
    const key = Object.keys(value)[0];
    return value[key];
  }

}
