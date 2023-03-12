import styled from "styled-components";

export const Button = styled.button`
background-color: ${({ theme }) => theme.color.trueBlue};
color: ${({theme}) => theme.color.white};
border: none;
border: 1px solid rgba(209, 213, 218, 0.3);
border-radius: 4px;
width: 154px;
height: 49px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
gap: 16px;
cursor: pointer;
letter-spacing: 0.05em;
`
    