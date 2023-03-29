import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

export const SkillsTitle = styled.h2`
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 32px 0 15px 0;
  margin: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.skillsTitleBorderBottom};
  color: ${({ theme }) => theme.color.skillsTitleColor};
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    margin: 16px;
    padding: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 32px;
  margin-left: 34px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  column-gap: 115px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: auto;
    margin: 16px;
    padding: 0;
  }
`;

export const EllipseIcon = styled(Ellipse)`
  margin-right: 16px;
  justify-content: center;
  color: ${({ theme }) => theme.color.ellipseIconColor};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-right: 8px;
    width: 6px;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
    line-height: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
