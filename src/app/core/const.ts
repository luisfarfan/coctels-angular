/*
1)categories
2)glasses
3)ingredients
4)alcoholic
* */
export enum CATEGORIES {
  CATEGORIES = 'categories',
  GLASSES = 'glasses',
  INGREDIENTS = 'ingredients',
  ALCOHOLIC = 'alcoholic',
}

export const CATEGORIES_MENU = [
  {
    path: CATEGORIES.CATEGORIES,
    name: 'Categories'
  },
  {
    path: CATEGORIES.GLASSES,
    name: 'glasses'
  },
  {
    path: CATEGORIES.INGREDIENTS,
    name: 'ingredients'
  },
  {
    path: CATEGORIES.ALCOHOLIC,
    name: 'alcoholic'
  },
];
