import styled, { css } from "styled-components";
import { ReactComponent as DayIcon } from "../../images/weather-sunny.svg";

export const DarkMode = styled.div`
  position: absolute;
  display: flex;
  justify-self: end;
  align-items: center;
  align-self: start;
  padding: 0px;
  gap: 12px;
  font-size: 12px;
`;

export const DarkModeButton = styled.button`
  display: inline-block;
  height: 25px;
  min-width: 60px;
  border-radius: 40px;
  border: none;
  background: ${({ theme }) => theme.color.darkModeButtonBackground};
  box-shadow: 0 0 2px ${({ theme }) => theme.color.darkModeButtonBoxShadow};
  cursor: pointer;
  transition: 0.4s ease-in;
`;

export const MoonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SunIcon = styled(DayIcon)`
  width: 20px;
  height: 20px;
`;

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.circleBackground};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.circleBoxShadow};
  position: relative;
  left: -4.5px;
  transition: 1s ease-in;

  ${({ animationCircle }) =>
    animationCircle &&
    css`
      transform: translate(36px) rotate(180deg);
    `}
`;
export const Span = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;
