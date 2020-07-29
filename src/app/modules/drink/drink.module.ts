import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSimpleDetailComponent } from './drink-simple-detail/drink-simple-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DrinkFullDetailComponent } from './drink-full-detail/drink-full-detail.component';


@NgModule({
  declarations: [DrinkSimpleDetailComponent, CategoriesListComponent, DrinkFullDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [DrinkSimpleDetailComponent, CategoriesListComponent, DrinkFullDetailComponent]
})
export class DrinkModule {
}
