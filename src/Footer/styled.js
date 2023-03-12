import styled, { css } from "styled-components";
import { ReactComponent as GitHubIcon } from "../images/shape-icon.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin-icon.svg";
import { ReactComponent as InstaIcon } from "../images/insta-icon.svg";

export const Content = styled.div`
  max-width: 670px;
`;
export const ContentElement = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.slateGray};
`;
export const ContentTitle = styled.div`
  color: ${({ theme }) => theme.color.raisinBlack};
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0.05em;
  margin-top: 12px;
  margin-bottom: 35px;
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const ContentInfo = styled.div`
  color: ${({ theme }) => theme.color.raisinBlack};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 32px;
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const FooterIcons = styled.div`
  display: flex;
  gap: 24px;
`;
export const GitHubLink = styled(GitHubIcon)`
width: 48px;
height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const FacebookLink = styled(FacebookIcon)`
width: 48px;
height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const LinkedinLink = styled(LinkedinIcon)`
width: 48px;
height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
transition: 0.6s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const InstaLink = styled(InstaIcon)`
width: 48px;
height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.6s ease-in;
  
  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
