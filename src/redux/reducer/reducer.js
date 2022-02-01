import { ACTION_TYPE } from "../action/action_type";

const intialState = { All_Product: [] };

export const AllData = (state = intialState, action, payload) => {
  switch (action.type) {
    case ACTION_TYPE.ALL_PRODUCTS:
      return (state.All_Product = { state: [...state, payload] });

    default:
      return state.All_Product;
  }
};
