import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./recipe";
import "./recipelist.css";

const RecipeList = ({ mealType }) => {
  const recipes = useSelector((state) => state.recipes);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.mealType.includes(mealType)
  );
  console.log(filteredRecipes, "aaaaaaaaa");
  return (
    <div className="recipelist-cont">
      <h2 className="headingname">{mealType.toUpperCase()} RECIPES</h2>
      <ul className="listrecipe">
        {filteredRecipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
