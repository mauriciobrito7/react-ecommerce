import React from "react";
// styles
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// components
import CartItem from "../cart-item/cart-item.component";

// Router
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
        <CartDropdownButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </CartItemsContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
/*connect actually passes dispatch into our components as a prop if we do not supply a second  
argument to connect, so if we don't supply map dispatch the props as the second parameter connect will pass the dispatch
into our dropdown
*/
export default withRouter(connect(mapStateToProps)(CartDropdown));
