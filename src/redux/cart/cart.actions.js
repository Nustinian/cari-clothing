import { CartActionTypes } from "./cart.types";

export const toggleHidden = (hidden) => ({
  type: CartActionTypes.TOGGLE_HIDDEN,
  payload: !hidden,
});
