import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth; 
  font-size: 62.5%;  
  font-family: 'Manrope', sans-serif;
}

@media screen and (max-width: 560px) {
  html {
    font-size: 58%
  }
}

@media screen and (max-width: 540px) {
  html {
    font-size: 54%
  }
}

::placeholder, input {
  color: #868e96;
  font-family: inherit
}

`;

export default GlobalCSS;
