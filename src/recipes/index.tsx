import React from "react";
import RecipesList from "./list/recipesList"
import RecipesSearch from "./search/searchInputSection"
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';



function Recipes() {
  
  const searchRecipes = function(queryString: string){
    console.log(queryString);
  }
  return (
    <Card >
      <RecipesSearch search={searchRecipes} />
      <Divider component="li" />

      <RecipesList />

    </Card >
  );
}
  
  export default Recipes;
  