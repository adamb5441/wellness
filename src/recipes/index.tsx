import React from "react";
import RecipesList from "./list/recipesList"
import RecipesSearch from "./search/searchInputSection"
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios';

function Recipes() {
  
  const { getAccessTokenSilently } = useAuth0();
  const searchRecipes = async function(queryString: string){
    console.log(queryString);
    // const token = await getAccessTokenSilently({
    //   audience: `https://WellnessRecipes.com`,
    // })

      axios.get(
        `/api/Search/OpenSearch?page=1&pageSize=5`
      ).then(res => {
        console.log(res)
      }).catch( err =>{
        console.log(err)
      })

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
  