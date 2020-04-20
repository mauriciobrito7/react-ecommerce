import React from "react";
import { Link } from "react-router-dom";

// high order component
import { connect } from "react-redux";

// Styles
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

// Components
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hiddenDropdown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="./signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenDropdown ? null : <CartDropdown />}
    </div>
  );
};

// this name can be anything but mapStateToProps is standard with redux codebases
/*({user: {currentUser}, cart: {hidden}}) */
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hiddenDropdown: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
