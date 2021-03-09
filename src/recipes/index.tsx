import React from "react";
import RecipesList from "./list/recipesList"
import RecipesSearch from "./search/searchInputSection"
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';



function Recipes() {

  return (
    <Card >
      <RecipesSearch />
      <Divider component="li" />
      <RecipesList />

    </Card >
  );
}
  
  export default Recipes;
  