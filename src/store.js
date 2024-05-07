import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Sahi import

import Reducer from "./redux/reducer/reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
