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
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-family: 'Helvetica';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #393939;
  }
`;
