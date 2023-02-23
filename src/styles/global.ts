import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  html, 
  body {
    height: 100%;
  }
  #root{
    height: 100%;
  }
`;
