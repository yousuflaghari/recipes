import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "../components/recipe";
import Topbar from "../components/topbar";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchRecipes } from "../redux/action/action";
import ROUTES from "../utils/constants/constants";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeContainer = styled.div`
  width: 200px;
  display: inline-flex;
  padding: 40px;
  cursor: pointer;
`;

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchRecipes())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes);

  const navigateRecipe = (recipeId) => {
    navigate(ROUTES.RECIPEDETAIL(recipeId));
  };

  if (loading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <HomepageContainer>
      <Topbar />
      <RecipesContainer>
        {recipes.map((recipe) => (
          <RecipeContainer
            key={recipe.id}
            onClick={() => navigateRecipe(recipe.id)}
          >
            <Recipe recipe={recipe} />
          </RecipeContainer>
        ))}
      </RecipesContainer>
    </HomepageContainer>
  );
};

export default Home;
