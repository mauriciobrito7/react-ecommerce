import React from "react";

// high order component
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

// Styles
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import { auth } from "../../firebase/firebase.utils";

// Components
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hiddenDropdown }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="./signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hiddenDropdown ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// this name can be anything but mapStateToProps is standard with redux codebases
/*({user: {currentUser}, cart: {hidden}}) */

/*
and instead of passing it as a function we just pass it like so where the properties that we want point
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenDropdown: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
