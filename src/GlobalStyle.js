import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: ${({theme}) => theme.color.slateGrey};   
    background-color: ${({theme}) => theme.color.ghostWhite};
    max-width: 1216px;
    flex-basis: content
    ;
    margin: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 0.6s ease-in;

    ${({toggleDarkMode}) => toggleDarkMode && css`
    color: ${({theme}) => theme.color.white};   
    background-color: ${({theme}) => theme.color.raisinBlack};
    `}
  }
  

`;