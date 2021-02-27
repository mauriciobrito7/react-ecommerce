import React from "react";

// Styles
import { HomePageContainer } from "./homepage.styles";

// Components
import Directory from "./../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <h1 style={{ marginBottom: "1em" }}>Be nice</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
