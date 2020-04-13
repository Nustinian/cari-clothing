import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item-styles.scss";

const CollectionItem = ({ id, name, imageUrl, price, addToCart }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton
      onClick={() =>
        addToCart({ id: id, name: name, imageUrl: imageUrl, price: price })
      }
      inverted
    >
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: ({ ...itemProps }) => dispatch(addToCart({ ...itemProps })),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
