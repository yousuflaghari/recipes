import { ADD_RECIPE, ADD_TYPES, UPDATE_SEARCH_RESULTS } from "../action/types";

const initialState = {
  recipes: [],
  types: [],
  updateSearchResults: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    case ADD_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        updateSearchResults: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
