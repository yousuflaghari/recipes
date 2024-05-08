import React from "react";
import styled from "@emotion/styled";

const RecipeContainer = styled.div`
  border: 1px solid;
  display: inline-flex;
  align-items: flex-start;
  margin: 10px;
  flex-direction: column;
  width: 200px;
`;

const RecipeNameContainer = styled.div`
  display: flex;
  margin: 0px;
  background-color: bisque;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -24px;
  margin-left: 30px;
`;

const RecipeImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px; /* Adjust margin between image and name */
`;

const RecipeName = styled.h1`
  font-size: 10px;
  text-align: center;
`;

const Recipe = ({ recipe }) => {
  return (
    <RecipeContainer>
      <RecipeImage src={recipe.image} />
      <RecipeNameContainer>
        <RecipeName>{recipe.name}</RecipeName>
      </RecipeNameContainer>
    </RecipeContainer>
  );
};

export default Recipe;
