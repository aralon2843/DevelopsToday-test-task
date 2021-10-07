import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    margin: 0px;
    padding: 0px;
    box-sixing: border-box;
  }

  input {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    color: #404040;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
