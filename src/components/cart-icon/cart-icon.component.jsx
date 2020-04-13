import React from "react";

import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

class CartIcon extends React.Component {
  render() {
    const { toggleHidden } = this.props;
    return (
      <div onClick={() => toggleHidden()} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">2</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
