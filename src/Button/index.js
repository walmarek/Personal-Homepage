import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.color.buttonBackground};
  color: ${({ theme }) => theme.color.buttonColor};
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
  transition: 0.4s;

  &:hover {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.color.buttonHoverBoxShadow},
      2px 2px 0px 0px ${({ theme }) => theme.color.buttonHoverBoxShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.color.buttonHoverBoxShadow},
      2px -2px 0px 0px ${({ theme }) => theme.color.buttonHoverBoxShadow};
  }

  &:active {
    box-shadow: inset 0px 2px 0px 0px
      ${({ theme }) => theme.color.buttonActiveBoxShadow}33;
  }
`;
