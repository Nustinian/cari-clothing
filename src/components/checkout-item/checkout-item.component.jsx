import React from "react";

import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addToCart,
  removeFromCart,
  clearFromCart,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearFromCart(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  clearFromCart: (item) => dispatch(clearFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
