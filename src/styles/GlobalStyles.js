import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
    overflow-y: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
