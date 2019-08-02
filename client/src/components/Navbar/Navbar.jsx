import React from "react";
import { StyledNav, Logo, SearchBar } from "./Navbar.styles";

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Logo>LOGO</Logo>
        <SearchBar />
        <ul>
          <div>🏠 Home</div>
          <div>❓ About</div>
          <div>🗣 Contact</div>
        </ul>
      </StyledNav>
    );
  }
}

export default Nav;
