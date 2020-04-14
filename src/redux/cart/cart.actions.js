import { CartActionTypes } from "./cart.types";

export const toggleHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: item,
});

export const clearFromCart = (item) => ({
  type: CartActionTypes.CLEAR_FROM_CART,
  payload: item,
});
