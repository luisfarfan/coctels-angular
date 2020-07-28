import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkPageRoutingModule } from './drink-page-routing.module';
import { DrinkPageComponent } from './drink-page.component';


@NgModule({
  declarations: [DrinkPageComponent],
  imports: [
    CommonModule,
    DrinkPageRoutingModule
  ]
})
export class DrinkPageModule {
}
