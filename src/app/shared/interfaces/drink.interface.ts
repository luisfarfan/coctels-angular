export interface DrinkDetailSimple {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface DrinkDetailSimpleList {
  drinks: DrinkDetailSimple[];
}

export interface DrinkCategory {
  drinks: {
    [k: string]: string;
  }[];
}
