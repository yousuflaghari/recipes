import { ADD_RECIPE, ADD_TYPES, UPDATE_SEARCH_RESULTS } from "./types";
import axios from "axios";
export const fetchRecipes = () => async (dispatch) => {
  try {
    const reciperesponse = await axios.get("https://dummyjson.com/recipes");
    const recipedata = reciperesponse.data;
    dispatch(addrecipe(recipedata.recipes));
    const catagoryresponse = await axios.get(
      "https://dummyjson.com/recipes/meal-type/dinner"
    );
    const catagorydata = catagoryresponse.data;
    dispatch(addtypes(catagorydata.recipes));
  } catch (error) {
    console.log("Error in fetching recipes: ", error);
  }
};
export const handleSearch = (search) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/recipes/search?q=${search}`
    );
    const searchData = response.data;
    console.log(searchData);

    // Dispatch action to update state with search results
    dispatch(updateSearchResults(searchData.recipes));
  } catch (error) {
    console.log("Error in searching recipes: ", error);
  }
};

export const addrecipe = (recipes) => {
  return {
    type: ADD_RECIPE,
    payload: recipes,
  };
};

export const addtypes = (types) => {
  return {
    type: ADD_TYPES,
    payload: types,
  };
};
export const updateSearchResults = (searchrecipes) => {
  return {
    types: UPDATE_SEARCH_RESULTS,
    payload: searchrecipes,
  };
};
