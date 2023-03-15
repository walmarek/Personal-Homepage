import styled, { css } from "styled-components";
import { ReactComponent as DangerIcon } from "../../../../images/danger.svg";

export const ErrorIcon = styled(DangerIcon)`
  margin-top: 90px;
  color: ${({ theme }) => theme.color.raisinBlack};
  width: 53px;
  height: 48px;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const ErrorTitle = styled.h3`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;
  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const ErrorInfo = styled.p`
  margin: 32px;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
