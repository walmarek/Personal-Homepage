import styled, { css } from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.color.trueBlue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 4px;
  width: 154px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 16px;
  cursor: pointer;
  letter-spacing: 0.05em;

  &:hover {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.color.lightSkyBlue},
      2px 2px 0px 0px ${({ theme }) => theme.color.lightSkyBlue},
      -2px 2px 0px 0px ${({ theme }) => theme.color.lightSkyBlue},
      2px -2px 0px 0px ${({ theme }) => theme.color.lightSkyBlue};
  }

  &:active {
    box-shadow: inset 0px 2px 0px 0px
      ${({ theme }) => theme.color.calPolyPomonaGreen}33;
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      background: ${({ theme }) => theme.color.dodgerBlueBlue};

      &:hover {
        box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.color.ceruleanFrost},
          2px 2px 0px 0px ${({ theme }) => theme.color.ceruleanFrost},
          -2px 2px 0px 0px ${({ theme }) => theme.color.ceruleanFrost},
          2px -2px 0px 0px ${({ theme }) => theme.color.ceruleanFrost};
      }
    `}
`;
