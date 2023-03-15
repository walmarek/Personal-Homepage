import styled from "styled-components";

export const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoint.tablet}) {
    width: 100%;
    }
`;