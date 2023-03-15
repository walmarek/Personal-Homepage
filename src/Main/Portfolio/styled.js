import styled, { css } from "styled-components";

export const PortfolioList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: auto auto;
  gap: 32px;
  margin-top: 24px;
`;
export const RepoTile = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 51px;
  background: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.iron}4D;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.cetaceanBlue}08,
    0px -2px 50px 0px ${({ theme }) => theme.color.cetaceanBlue}05;
  border-radius: 4px;
  transition: 0.4s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    border: 6px solid ${({ theme }) => theme.color.trueBlue}33;
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      background: ${({ theme }) => theme.color.mineShaft};
      border: 6px solid ${({ theme }) => theme.color.iron}1A
      box-shadow: 0px 16px 58px 0px #090A3308;
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.color.mineShaft}19;
        border: 6px solid ${({ theme }) => theme.color.trueBlue}33;
      }
    `}
`;

export const RepoTitle = styled.h3`
  color: ${({ theme }) => theme.color.trueBlue};
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  margin: 0;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const RepoDescription = styled.p`
  font-size: 18px;
  line-height: 25px;
`;
export const RepoLinks = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  justify-content: left;
`;

export const RepoLink = styled.a`
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.trueBlue}33;
  color: ${({ theme }) => theme.color.trueBlue};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.dodgerBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}
`;
