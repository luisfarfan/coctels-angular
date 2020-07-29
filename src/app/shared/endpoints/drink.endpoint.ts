import { environment } from '../../../environments/environment';

export class DrinkEndpoint {
  public static listCategories = (category: string, queryString: string) => `${environment.baseUrl}list.php?${category}=list`;
  public static filterByCategory = (category: string, queryString: string) => `${environment.baseUrl}filter.php?${category}=${queryString}`;
}
