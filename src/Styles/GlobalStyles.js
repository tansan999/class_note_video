import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: 0.3s ease all;
  }
`;

export const lightTheme = {
  bg: "#f3f4f6",
  text: "#111827",
};

export const darkTheme = {
  bg: "#111827",
  text: "#f3f4f6",
};

export default GlobalStyles;
