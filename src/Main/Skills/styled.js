import styled, { css } from "styled-components";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

export const SkillsTitle = styled.h2`
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 32px 0 15px 0;
  margin: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 32px;
  margin-left: 34px;
  font-size: 18px;
  line-height: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  column-gap: 115px;

  @media (max-width: ${({theme}) => theme.breakpoint.tablet}) {
    display: grid;
    grid-template-columns: auto auto;
    }
    @media (max-width: ${({theme}) => theme.breakpoint.laptop}) {
    display: grid;
    grid-template-columns: auto auto;
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: auto;
    }

`;

export const EllipseIcon = styled(Ellipse)`
  margin-right: 16px;
  justify-content: center;
  color: ${({ theme }) => theme.color.trueBlue};

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}
`;

export const Item = styled.li``;
