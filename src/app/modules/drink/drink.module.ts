import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSimpleDetailComponent } from './drink-simple-detail/drink-simple-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DrinkFullDetailComponent } from './drink-full-detail/drink-full-detail.component';
import { DrinkSimpleDetailListComponent } from './drink-simple-detail-list/drink-simple-detail-list.component';
import { DrinkSearchComponent } from './drink-search/drink-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DrinkSimpleDetailComponent,
    CategoriesListComponent, DrinkFullDetailComponent, DrinkSimpleDetailListComponent, DrinkSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DrinkSimpleDetailComponent,
    CategoriesListComponent, DrinkFullDetailComponent, DrinkSimpleDetailListComponent, DrinkSearchComponent]
})
export class DrinkModule {
}
