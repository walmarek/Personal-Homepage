import styled, { css } from "styled-components";

export const LoaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
`;

export const SpinnerInfo = styled.span`
  position: relative;
  top: -90px;
  font-size: 20px;
`;

export const Spinner = styled.div`
  border-top: 16px solid ${({ theme }) => theme.color.raisinBlack};
  border-bottom: 16px solid ${({ theme }) => theme.color.trueBlue};
  border-radius: 50%;
  width: 160px;
  height: 160px;
  animation: spin 1.1s linear infinite;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      border-top: 20px solid ${({ theme }) => theme.color.white};
    `}
`;

export const LoadingMessage = styled.span`
  margin: 88px auto 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
