import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
  }

  body {
    background: #FCFCFD;
    -webkit-font-smoothing: antialiased;
    z-index: 9999;
  }

  body, input, button {
    font:  'Source Sans Pro', sans-serif;
    color: #170C3A;
  }

  button {
    cursor: pointer;
  }
`;
