import React from "react";
// Styles
import "./checkout-item.styles.scss";

// Redux
import { connect } from "react-redux";
import {
  removeCartItem,
  removeItem,
  addCartItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  removeItem,
  addCartItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={() => {
            addCartItem(cartItem);
          }}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeCartItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
