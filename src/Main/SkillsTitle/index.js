import styled, { css } from "styled-components";

export const SkillsTitle = styled.h2`
font-size: 30px;
line-height: 36px;
font-weight: 900;
letter-spacing: 0.05em;
padding: 32px 0 15px 0;
margin: 32px;
border-bottom: 1px solid  ${({ theme}) => theme.color.iron};
color: ${({ theme}) => theme.color.raisinBlack};
transition: 0.6s ease-in;

${({toggleDarkMode}) => toggleDarkMode && css`
color: ${({theme}) => theme.color.white};
`}
`