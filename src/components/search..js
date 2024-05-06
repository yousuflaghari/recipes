import React, { useState } from "react";
import "./search.css";
import { useSelector } from "react-redux";

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
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter the Recipe"
        className="searchbar"
        value={search}
        onChange={InputChange}
      />
      <div className="search-results">
        {search && filteredRecipes.length > 0
          ? filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="img-search"
                />
                <h3>{recipe.name}</h3>
              </div>
            ))
          : null}
        {search && filteredRecipes.length === 0 && <p>No recipes found</p>}
      </div>
    </div>
  );
};

export default SearchPage;
