import React from "react";

import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ itemCount, toggleHidden }) => (
  <div onClick={() => toggleHidden()} className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
