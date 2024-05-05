import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addrecipe, addtypes } from "./redux/action/action";
import Home from "./pages/home";
import axios from "axios";
import Recipedetail from "./components/recipedetail";
import RecipeList from "./components/recipielist";
import SearchPage from "./components/search.";
function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
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

    fetchRecipes();
  }, [dispatch]);

  // Function to handle recipe search
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${searchQuery}`
      );
      const searchData = response.data;
      // Dispatch action to update state with search results
      // For example: dispatch(updateSearchResults(searchData.recipes));
    } catch (error) {
      console.log("Error in searching recipes: ", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<Recipedetail />} />
        <Route path="/dinner" element={<RecipeList mealType="Dinner" />} />
        <Route path="/lunch" element={<RecipeList mealType="Lunch" />} />
        <Route path="/dessert" element={<RecipeList mealType="Dessert" />} />
        <Route path="/snack" element={<RecipeList mealType="Snack" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
