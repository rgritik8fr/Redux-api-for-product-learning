import { createStore } from "redux";
import { All_reducer } from "../reducer";
export const store = createStore(
  All_reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
