import React from "react";
// styles
import "./cart-dropdown.styles.scss";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
