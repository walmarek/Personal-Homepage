import styled, { css } from "styled-components";


export const Box = styled.div`
max-width: 1219px;
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
background: ${({ theme }) => theme.color.white};

margin: 73px 0 72px 0;
padding: 0;
transition: 0.6s ease-in ;

${({toggleDarkMode}) => toggleDarkMode && css`
background: ${({ theme }) => theme.color.mineShaft};
color: ${({ theme }) => theme.color.white};
`}

`