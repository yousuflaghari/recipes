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
  color: ${(props) => props.theme.colors.headingColor};
`;

const RecipeListContainer = styled.div`
  margin-top: 20px;
`;
const UnorderListRecipes = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
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
      <UnorderListRecipes>
        {filteredRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </UnorderListRecipes>
    </RecipeListContainer>
  );
};

export default RecipeList;
