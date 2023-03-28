import styled from "styled-components";

export const Box = styled.div`
  max-width: 1219px;
  display: grid;
  grid-template-columns: auto;
  background: ${({ theme }) => theme.color.boxBackground};
  color: ${({ theme }) => theme.color.boxColor};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.boxBoxShadow}08,
    0px -2px 50px 0px ${({ theme }) => theme.color.boxBoxShadow}05;
  border-radius: 4px;
  margin-top: 73px;
  margin-bottom: 72px;
  padding: 0;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;
