import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./recipe";
import "./recipelist.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/action/action";
import styled from "@emotion/styled";

const Headeing = styled.h2`
  display: flex;
  justify-content: center;
`;

const RecipeList = ({ mealType }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes);
  }, []);
  const recipes = useSelector((state) => state.recipes);
  console.log("wwwwwww", recipes);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.mealType.includes(mealType)
  );
  console.log(filteredRecipes, "aaaaaaaaa");
  return (
    <div className="recipelist-cont">
      <Headeing>{mealType.toUpperCase()} RECIPES</Headeing>
      <ul className="listrecipe">
        {filteredRecipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
