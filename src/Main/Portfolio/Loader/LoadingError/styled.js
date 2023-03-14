import styled, { css } from "styled-components";
import {ReactComponent as DangerIcon} from "../../../../images/danger.svg";

export const ErrorIcon = styled(DangerIcon)`
 color: ${({ theme }) => theme.color.raisinBlack};
  width: 37px;
  height: 33px;
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const ErrorTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const ErrorInfo = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
