export const addrecipe = (recipes) => {
  return {
    type: "ADD_RECIPE",
    payload: recipes,
  };
};

export const addtypes = (types) => {
  return {
    type: "ADD_TYPES",
    payload: types,
  };
};
