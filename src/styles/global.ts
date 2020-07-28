import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #1A1A1A;
  }

  :root {
    --primary: #ff2d55;
    --black: #1a1a1a;
    --blackLighter: #9e9e9e;
    --grayLighter: #f5f5f5;
    --grayMedium: #e5e5e5;
    --white: #ffffff;
    --frontEnd: #6bd1ff;
    --backEnd: #00c86f;
    --mobile: #ffba05;
  }

  html,body {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
