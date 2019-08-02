import styled from "styled-components";

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  align-items: center;
  background: teal;
  ul {
    grid-column: 4 / 5;
    display: flex;
    padding: 1rem;
    margin: 0 5rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  grid-column: 2 / 3;
  padding: 0 5rem;
  font-size: 3rem;
  color: white;
`;

export const SearchBar = styled.input.attrs({ type: "text" })`
  color: teal;
`;
