import React from "react";

import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

class CartIcon extends React.Component {
  render() {
    const { hidden, toggleHidden } = this.props;
    return (
      <div onClick={() => toggleHidden(hidden)} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">2</span>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  hidden: cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: (hidden) => dispatch(toggleHidden(hidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
