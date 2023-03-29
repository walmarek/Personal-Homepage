import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.color.containerBackground};
  display: grid;
  grid-template-columns: auto auto;
  margin: 115px 0 0 0;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: auto;
    margin-top: 32px;
  }
`;
