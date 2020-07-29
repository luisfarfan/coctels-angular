import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionFromCategoryDrinkPipe } from './pipes/description-from-category-drink.pipe';


@NgModule({
  declarations: [DescriptionFromCategoryDrinkPipe],
  imports: [
  ],
  exports: [DescriptionFromCategoryDrinkPipe]
})
export class SharedModule {
}
