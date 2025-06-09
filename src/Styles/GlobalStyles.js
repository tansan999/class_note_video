import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f3f4f6;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
