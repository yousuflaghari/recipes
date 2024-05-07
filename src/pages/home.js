import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "../components/recipe";
import Topbar from "../components/topbar";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { fetchRecipes } from "../redux/action/action";
import ROUTES from "../utils/constants/constants";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes);

  const navigaterecipe = (recipeId) => {
    console.log("qqqqqqqqq", recipeId);
    navigate(ROUTES.RECIPEDETAIL(recipeId));
  };
  return (
    <div className="homepage-cont">
      <Topbar />
      <Header />
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipecontainer-home"
            onClick={() => navigaterecipe(recipe.id)}
          >
            <Recipe recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
