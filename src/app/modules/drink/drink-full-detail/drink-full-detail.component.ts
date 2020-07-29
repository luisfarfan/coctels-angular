import { Component, Input, OnInit } from '@angular/core';
import { DrinkFullDetail } from '../../../shared/interfaces/drink.interface';

@Component({
  selector: 'app-drink-full-detail',
  templateUrl: './drink-full-detail.component.html',
  styleUrls: ['./drink-full-detail.component.css']
})
export class DrinkFullDetailComponent implements OnInit {
  @Input() drink: DrinkFullDetail;
  INGREDIENT = 'strIngredient';
  MEASURE = 'strMeasure';

  constructor() {
  }

  get ingredients(): string[] {
    return Object.keys(this.drink).filter(k => k.includes(this.INGREDIENT) && this.drink[k]);
  }

  get measures(): string[] {
    return Object.keys(this.drink).filter(k => k.includes(this.MEASURE) && this.drink[k]);
  }

  ngOnInit(): void {
  }

}
