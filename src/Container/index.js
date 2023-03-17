import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.color.ghostWhite};
  display: grid;
  grid-template-columns: auto auto;
  margin: 115px 0 0 0;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.raisinBlack};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: auto;
    margin-top: 32px;
  }
`;
