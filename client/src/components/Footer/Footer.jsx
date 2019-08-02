import React from "react";
import { StyledFooter } from "./Footer.styles";

const Footer = ({ toggleDarkMode }) => (
  <StyledFooter>
    <p>Github</p>
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
  </StyledFooter>
);
export default Footer;
