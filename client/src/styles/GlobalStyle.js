import { createGlobalStyle } from "styled-components";
import comfortaa from "../assets/Comfortaa-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: comfortaa;
    src: url(${comfortaa}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Helvetica';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: #393939;
  }
`;
