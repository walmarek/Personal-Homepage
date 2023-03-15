import styled, { css } from "styled-components";

export const Box = styled.div`
  max-width: 1219px;
  display: grid;
  grid-template-columns: auto;;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.cetaceanBlue}08,
    0px -2px 50px 0px ${({ theme }) => theme.color.cetaceanBlue}05;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};

  margin: 73px 0 72px 0;
  padding: 0;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      background: ${({ theme }) => theme.color.mineShaft};
      color: ${({ theme }) => theme.color.white};
      box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.cetaceanBlue}08;
      box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.cetaceanBlue}05;
    `}
`;

