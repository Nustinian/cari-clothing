import React from "react";

import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ items, toggleHidden }) => (
  <div onClick={() => toggleHidden()} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{items.length}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  items: cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
