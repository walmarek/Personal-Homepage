import styled, { css } from "styled-components";
import { ReactComponent as GitHub } from "../../../images/shape-icon.svg";

export const GitHubIcon = styled(GitHub)`
  margin-bottom: 13px;
  color: ${({ theme }) => theme.color.trueBlue};

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}
`;
export const PortfolioTitle = styled.h2`
  margin: 13px auto 8px auto;
  font-size: 30px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const UnderTitle = styled.span`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
