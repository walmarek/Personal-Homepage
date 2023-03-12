import styled, { css } from "styled-components";

export const Container = styled.div`

background: ${({ theme }) => theme.color.ghostWhite};
display: grid;
grid-template-columns: auto auto;
margin: 115px  0 0 0;
transition: 0.6s ease-in;

${({toggleDarkMode}) => toggleDarkMode && css`
    color: ${({theme}) => theme.color.white};   
    background: ${({theme}) => theme.color.raisinBlack};
    `}
`