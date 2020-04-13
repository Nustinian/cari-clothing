import React from "react";

import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ cartItems, toggleHidden }) => (
  <div onClick={() => toggleHidden()} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
