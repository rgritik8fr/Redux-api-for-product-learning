import { combineReducers } from "redux";
import { AllData } from "./reducer";

export const All_reducer = combineReducers({
  allproduct: AllData,
});
