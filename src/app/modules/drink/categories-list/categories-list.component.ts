import { Component, Input, OnInit } from '@angular/core';
import { DrinkCategory } from '../../../shared/interfaces/drink.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Input() categories: DrinkCategory;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.categories);
  }

}
