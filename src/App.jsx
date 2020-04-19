import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// Components
import Header from "./components/header/header.component";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Actions
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends React.Component {
  unsubsribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={signInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
