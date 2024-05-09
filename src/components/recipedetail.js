import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Topbar from "./topbar";
import Header from "./header";
import { theme } from "../styles/theme";

const RecipedetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
`;

const RecipeImageContainer = styled.div`
  padding: 50px;
  margin-left: 20px;
`;

const RecipeDetailContainer = styled.div`
  padding: 50px;
  margin-left: 20px;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const RecipeName = styled.h4`
  color: ${theme.colors.recipenameColor};
  display: flex;
  justify-content: center;
  margin: 0;
`;

const FeatureName = styled.h4`
  color: ${theme.colors.featurenameColor};
  padding-left: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

const RecipeType = styled.div`
  font-weight: bold;
  font-size: xx-large;
  color: ${theme.colors.recipetypeColor};
`;

const RecipeInstructions = styled.div`
  color: ${theme.colors.receipeInstructionsColor};
  margin-top: 30px;
`;

const CaloriesRatingReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  color: ${theme.colors.caloriesratingreviewscontainerColor};
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.colors.tagscontainerColor};
`;

const Tag = styled.p`
  margin-right: 10px;
`;

const Recipedetail = () => {
  const { recipeId } = useParams();
  const recipes = useSelector((state) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id == recipeId);
  const tags = recipe.tags;

  return (
    <RecipedetailContainer>
      <Topbar />
      <Header />
      <MainContainer>
        <RecipeImageContainer>
          <Image src={recipe.image} alt={recipe.title} />
          <FeatureName>FEATURED RECIPE:</FeatureName>
          <RecipeName>{recipe.name}</RecipeName>
        </RecipeImageContainer>
        <RecipeDetailContainer>
          <RecipeType>{recipe.name}</RecipeType>
          <RecipeInstructions>{recipe.instructions}</RecipeInstructions>
        </RecipeDetailContainer>
      </MainContainer>
      <CaloriesRatingReviewsContainer>
        <p className="calories">calories: {recipe.caloriesPerServing}</p>
        <p className="rating">rating: {recipe.rating}</p>
        <p className="reviews">reviews: {recipe.reviewCount}</p>
      </CaloriesRatingReviewsContainer>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </TagsContainer>
    </RecipedetailContainer>
  );
};

export default Recipedetail;
