import { createGlobalStyle} from "styled-components";

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
    color: ${({ theme }) => theme.color.bodyColor};   
    background: ${({ theme }) => theme.color.bodyBackground};
    max-width: 1216px;
    margin: 6px auto; 
    transition: 0.4s ease-in;

      @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        margin: 16px;
}
  }
`;
