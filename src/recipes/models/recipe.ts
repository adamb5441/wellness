export interface Recipe {
    id: string;
    name: string;
    directions: string;
    ingredients: Ingredient[];
  }
  
  interface Ingredient {
    name: string;
    quantity: number;
    measurement: string;
  }