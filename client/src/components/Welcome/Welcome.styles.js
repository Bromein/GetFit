import styled from "styled-components";

export const WelcomePage = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap");

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 0.5fr;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: orange;
  position: relative;
  z-index: 0;
  @media (max-width: 800px) {
    grid-template-columns: 1rem 1fr 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background: url(${props => props.bgImg});
    z-index: -1;
    background-size: cover;

    background-position: right;
    /* background-repeat: no-repeat; */
    background-size: cover;
  }

  a {
    grid-column: 2 / 3;
    color: purple;
    justify-self: center;
    transition: all 1s ease-in-out;
    &:hover {
      font-size: 2rem;
    }
  }
`;

export const DailyQuote = styled.section`
  /* background-color: rgba(255, 255, 255, 0.1); */
  padding: 2rem;
  font-size: 3rem;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 2rem;
  }

  & > * {
    font-family: "Liu Jian Mao Cao";
    font-size: inherit;
    color: rgba(0, 0, 0, 0.5);
  }
`;
