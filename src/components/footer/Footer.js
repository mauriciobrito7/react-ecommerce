/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { ContainerFlex } from "./Footer.styles";
const Footer = () => {
  return (
    <ContainerFlex>
      Proudly made in <span>🇻🇪</span> by &nbsp;
      <a
        href="https://www.linkedin.com/in/mauricio-brito-62b0a6140/"
        target="blind"
      >
        Mauricio Brito
      </a>
    </ContainerFlex>
  );
};

export default Footer;
