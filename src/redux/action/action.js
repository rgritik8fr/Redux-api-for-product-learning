import { ACTION_TYPE } from "./action_type";

export const ALL_PRODUCTS = (data) => {
  return { type: ACTION_TYPE.ALL_PRODUCTS, payload: data };
};
