import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkPageComponent } from './drink-page.component';
import { DrinkCategoryComponent } from './drink-category/drink-category.component';

const routes: Routes = [
  {
    path: '',
    component: DrinkPageComponent
  },
  {
    path: '',
    children: [
      {
        path: 'category/:type',
        component: DrinkCategoryComponent
      },
    ]
  },
  {
    path: 'drink/:id',
    component: DrinkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkPageRoutingModule {
}
