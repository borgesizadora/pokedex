import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.darkGray};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }

  ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #292c33;
     border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3a3f4b;
     border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #4d5362;
     border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: #5f667a;
     border-radius: 10px;
  }
  
`;
