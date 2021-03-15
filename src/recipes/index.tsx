import React from "react";
import RecipesList from "./list/recipesList"
import RecipesSearch from "./search/searchInputSection"
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios';

function Recipes() {
  
  const { getAccessTokenSilently } = useAuth0();
  const [ recipes, setRecipes ] = React.useState([])
  const searchRecipes = async function(queryString: string){
    console.log(queryString);
    // const token = await getAccessTokenSilently({
    //   audience: `https://WellnessRecipes.com`,
    // })

      axios.get(
        `/api/Search/OpenSearch?page=1&pageSize=5`
      ).then(res => {
        setRecipes(res.data)
      }).catch( err =>{
        console.log(err)
      })

  }
  return (
    <Card >
      <RecipesSearch search={searchRecipes} />
      <Divider component="li" />

      <RecipesList results={recipes}  />

    </Card >
  );
}
  
  export default Recipes;
  