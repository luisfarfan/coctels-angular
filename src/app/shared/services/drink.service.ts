import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrinkCategory, DrinkDetailSimple, DrinkDetailSimpleList } from '../interfaces/drink.interface';
import { DrinkEndpoint } from '../endpoints/drink.endpoint';
import { CATEGORIES } from '../../core/const';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  getCategoriesBy(category: CATEGORIES): Observable<DrinkCategory> {
    return this.http.get<DrinkCategory>(DrinkEndpoint.listCategories(category[0], 'list'));
  }

  filterByCategory(category: CATEGORIES, queryString: string): Observable<DrinkDetailSimpleList> {
    return this.http.get<DrinkDetailSimpleList>(DrinkEndpoint.filterByCategory(category[0], queryString));
  }
}
