import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 740px;
  border: 1px solid;
  border-radius: 23px;
  padding-left: 200px;
  font-size: x-large;
  margin: 5px 20px;
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const RecipeItem = styled.div`
  margin: 20px;
`;

const ImageSearch = styled.img`
  width: 200px;
  height: 200px;
`;

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const recipes = useSelector((state) => state.recipes);

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SearchContainer>
      <SearchBar
        type="text"
        placeholder="Enter the Recipe"
        value={search}
        onChange={InputChange}
      />
      <SearchResults>
        {search && filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeItem key={recipe.id}>
              <ImageSearch src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
            </RecipeItem>
          ))
        ) : search && filteredRecipes.length === 0 ? (
          <p>No recipes found</p>
        ) : null}
      </SearchResults>
    </SearchContainer>
  );
};

export default SearchPage;
