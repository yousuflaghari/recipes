import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./recipedetail.css";
import Topbar from "./topbar";
import Header from "./header";
const Recipedetail = () => {
  const { recipeId } = useParams();
  const recipes = useSelector((state) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id == recipeId);
  const tags = recipe.tags;

  return (
    <div className="recipedetail-container">
      <Topbar />
      <Header />
      <div className="main">
        <div className="recipe-image">
          <img className="img" src={recipe.image} alt={recipe.title} />
          <h4 className="featurename">FEATURED RECIPE:</h4>
          <h4 className="recipedetail-name">{recipe.name}</h4>
        </div>
        <div className="recipe-detail">
          <div className="recipe-type"> {recipe.name}</div>
          <div className="recipe-instructions">{recipe.instructions}</div>
        </div>
      </div>
      <div className="calories-rating-reveiws">
        <p className="calories">calories: {recipe.caloriesPerServing} </p>
        <p className="rating">rating: {recipe.rating}</p>
        <p className="reviews"> reviews: {recipe.reviewCount}</p>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <p className="tags">#{tag}</p>
        ))}
      </div>
    </div>
  );
};
export default Recipedetail;
