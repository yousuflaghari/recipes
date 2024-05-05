import React from "react";
import "./recipe.css";
const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <img src={recipe.image} className="img-recipe"></img>
      <div className="recipename-container">
        <h1 className="recipe-name">{recipe.name}</h1>
      </div>
    </div>
  );
};
export default Recipe;
