export interface Recipe {
    id: string;
    name: string;
    directions: string;
    ingredients: Ingredient[];
  }
  
  interface Ingredient {
    id: string;
    name: string;
    description: string;
    rating: number;
  }