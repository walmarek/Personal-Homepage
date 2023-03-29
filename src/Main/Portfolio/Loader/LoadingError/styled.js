import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../../../images/danger.svg";

export const ErrorIcon = styled(DangerIcon)`
  margin-top: 90px;
  color: ${({ theme }) => theme.color.errorIconColor};
  width: 53px;
  height: 48px;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 32px;
  }
`;

export const ErrorTitle = styled.h3`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  color: ${({ theme }) => theme.color.errorIconColor};
  transition: 0.4s ease-in;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ErrorInfo = styled.p`
  margin: 32px;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.color.errorIconColor};
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 20px;
  }

`;
