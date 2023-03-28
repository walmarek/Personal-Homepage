import styled from "styled-components";

export const PortfolioList = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const RepoTile = styled.div`
  padding: 51px;
  background: ${({ theme }) => theme.color.repoTileBackground};
  border: 6px solid ${({ theme }) => theme.color.repoTileBorder}4D;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.repoTileBoxShadow}08,
    0px -2px 50px 0px ${({ theme }) => theme.color.repoTileBoxShadow}05;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.repoTileBoxShadow}33;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 24px;
  }
`;

export const RepoTitle = styled.h3`
  color: ${({ theme }) => theme.color.repoTitleColor};
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  margin: 0;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const RepoDescription = styled.p`
  font-size: 18px;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const RepoLinks = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  justify-content: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
  }
`;

export const RepoLink = styled.a`
  text-decoration: none;
`;

export const RepoUrl = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.color.repoUrlBorderBottom}33;
  color: ${({ theme }) => theme.color.repoUrlColor};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.repoUrlHoverColor};
  }
`;
