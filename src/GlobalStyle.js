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
    color: ${({ theme }) => theme.color.slateGrey};   
    background: ${({ theme }) => theme.color.ghostWhite};
    max-width: 1216px;
    margin: 6px auto; 
    transition: 0.4s ease-in;

    ${({ toggleDarkMode }) =>
      toggleDarkMode &&
      css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.raisinBlack};
      `}

      @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
margin: 16px;
}
  }
`;
