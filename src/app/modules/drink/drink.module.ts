import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSimpleDetailComponent } from './drink-simple-detail/drink-simple-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DrinkSimpleDetailComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [DrinkSimpleDetailComponent, CategoriesListComponent]
})
export class DrinkModule {
}
