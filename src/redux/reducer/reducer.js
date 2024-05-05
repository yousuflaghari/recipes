const initialState = {
  recipes: [],
  types: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        recipes: action.payload,
      };
    case "ADD_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
