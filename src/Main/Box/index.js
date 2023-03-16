import styled, { css } from "styled-components";

export const Box = styled.div`
  max-width: 1219px;
  display: grid;
  grid-template-columns: auto;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.cetaceanBlue}08,
    0px -2px 50px 0px ${({ theme }) => theme.color.cetaceanBlue}05;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};
  margin-top: 73px;
  margin-bottom: 72px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;
