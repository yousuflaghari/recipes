import React, { useState } from "react";
import Recipe from "../components/recipe";
import Topbar from "../components/topbar";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes);

  const navigaterecipe = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="homepage-cont">
      <Topbar />
      <Header />
      {/* Opening <div> tag was missing here */}
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
      {/* Closing </div> tag for .recipes-container */}
    </div>
  );
};

export default Home;
