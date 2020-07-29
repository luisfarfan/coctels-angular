import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CATEGORIES } from '../../../core/const';
import { DrinkService } from '../../../shared/services/drink.service';
import { DrinkCategory, DrinkDetailSimple, DrinkDetailSimpleList } from '../../../shared/interfaces/drink.interface';

@Component({
  selector: 'app-drink-category',
  templateUrl: './drink-category.component.html',
  styleUrls: ['./drink-category.component.scss']
})
export class DrinkCategoryComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  category: CATEGORIES;
  categories: DrinkCategory;
  drinksSimple: DrinkDetailSimpleList;

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => {
        this.category = params.type;
        this.getCategories();
      });
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(queryParams => {
        this.getDrinksSimpleDetail(queryParams.query);
      });
  }

  ngOnInit(): void {
  }

  async getCategories(): Promise<void> {
    this.categories = await this.drinkService.getCategoriesBy(this.category).toPromise();
    console.log(this.categories);
  }

  async getDrinksSimpleDetail(query: string): Promise<void> {
    this.drinksSimple = await this.drinkService.filterByCategory(this.category, query).toPromise();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
