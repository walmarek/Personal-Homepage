import styled from "styled-components";
import { ReactComponent as GitHub } from "../../../images/shape-icon.svg";

export const GitHubIcon = styled(GitHub)`
  margin-bottom: 13px;
  color: ${({ theme }) => theme.color.gitHubIconColor};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
    margin-bottom: -1px;
  }
`;

export const PortfolioTitle = styled.h2`
  margin: 13px auto 8px auto;
  font-size: 30px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.portfolioTitleColor};
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const UnderTitle = styled.span`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.portfolioTitleColor};
  transition: 0.4s ease-in;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
    line-height: 24px;
  }
`;
