import React from "react";
import { Link } from "react-router-dom";

// high order component
import { connect } from "react-redux";

// Styles
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

// this name can be anything but mapStateToProps is standard with redux codebases
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
