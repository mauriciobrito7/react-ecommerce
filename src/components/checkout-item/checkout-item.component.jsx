import React from "react";
// Styles
import {
  CheckOutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

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
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer className="quantity">
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div
          onClick={() => {
            addCartItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => removeCartItem(cartItem)}
        className="remove-button"
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
