import { CartActionTypes } from "./cart.types";

export const toggleHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});
