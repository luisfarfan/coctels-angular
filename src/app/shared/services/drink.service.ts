import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrinkCategory, DrinkDetailSimpleList, DrinkFullDetail } from '../interfaces/drink.interface';
import { DrinkEndpoint } from '../endpoints/drink.endpoint';
import { CATEGORIES } from '../../core/const';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<DrinkFullDetail> {
    return this.http.get<{ drinks: [DrinkFullDetail] }>(DrinkEndpoint.detail(id))
      .pipe(map(drinks => drinks.drinks[0]));
  }

  getCategoriesBy(category: CATEGORIES): Observable<DrinkCategory> {
    return this.http.get<DrinkCategory>(DrinkEndpoint.listCategories(category[0], 'list'));
  }

  filterByCategory(category: CATEGORIES, queryString: string): Observable<DrinkDetailSimpleList> {
    return this.http.get<DrinkDetailSimpleList>(DrinkEndpoint.filterByCategory(category[0], queryString));
  }
}
