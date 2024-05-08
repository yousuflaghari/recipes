import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./recipe";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/action/action";
import styled from "@emotion/styled";
const Heading = styled.h2`
  display: flex;
  justify-content: center;
`;

const RecipeListContainer = styled.div`
  margin-top: 20px;
`;

const RecipeList = ({ mealType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.mealType.includes(mealType)
  );

  return (
    <RecipeListContainer>
      <Heading>{mealType.toUpperCase()} RECIPES</Heading>
      <ul>
        {filteredRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </RecipeListContainer>
  );
};

export default RecipeList;
