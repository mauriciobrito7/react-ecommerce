import React from "react";

// styles
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
