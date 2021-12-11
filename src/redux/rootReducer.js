import { combineReducers } from "redux";
import citiesReducer from "./cities/cities-reducer";

export const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;