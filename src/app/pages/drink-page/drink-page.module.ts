import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkPageRoutingModule } from './drink-page-routing.module';
import { DrinkPageComponent } from './drink-page.component';
import { DrinkCategoryComponent } from './drink-category/drink-category.component';
import { DrinkModule } from '../../modules/drink/drink.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DrinkPageComponent, DrinkCategoryComponent],
  imports: [
    CommonModule,
    DrinkPageRoutingModule,
    DrinkModule,
    SharedModule
  ]
})
export class DrinkPageModule {
}
