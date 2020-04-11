import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = ({ match }) => (
  <div>
    {console.log(match)}
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
