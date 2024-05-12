import React from "react";
import styled from "@emotion/styled";

const RecipeContainer = styled.div`
  border: 1px ${(props) => props.theme.colors.recipecontainerbordercolor};
  display: inline-flex;
  align-items: flex-start;
  margin: 10px;
  flex-direction: column;
  width: 200px;
`;

const RecipeNameContainer = styled.div`
  display: flex;
  height: 34px;
  width: 121px;
  margin: 0;
  background-color: ${(props) =>
    props.theme.colors.recipenamecontainerBackgroundColor};
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -24px;
  margin-left: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const RecipeImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

const RecipeName = styled.h1`
  font-size: 16px;
  text-align: center;
`;

const truncateRecipeName = (name, maxWords) => {
  const words = name.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return name;
};

const Recipe = ({ recipe }) => {
  const truncatedName = truncateRecipeName(recipe.name, 2);
  return (
    <RecipeContainer>
      <RecipeImage src={recipe.image} />
      <RecipeNameContainer>
        <RecipeName>{truncatedName}</RecipeName>
      </RecipeNameContainer>
    </RecipeContainer>
  );
};

export default Recipe;
