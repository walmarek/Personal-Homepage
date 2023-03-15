import styled, { css } from "styled-components";
import { ReactComponent as GitHubIcon } from "../images/shape-icon.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin-icon.svg";
import { ReactComponent as InstaIcon } from "../images/insta-icon.svg";

export const Content = styled.div`
  max-width: 670px;
  margin-bottom: 109px;
`;
export const ContentElement = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
`;
export const ContentTitle = styled.div`
  color: ${({ theme }) => theme.color.raisinBlack};
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0.05em;
  margin-top: 24px;
  margin-bottom: 35px;
  transition: 0.4s ease-in;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.trueBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
      }
    `}
`;
export const ContentInfo = styled.div`
  color: ${({ theme }) => theme.color.raisinBlack};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 32px;
  transition: 0.4s ease-in;

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;
export const FooterIcons = styled.div`
  display: flex;
  gap: 24px;
  cursor: pointer;
`;

export const GitHub = styled(GitHubIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  :hover {
    color: ${({ theme }) => theme.color.trueBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
      }
    `}
`;
export const Facebook = styled(FacebookIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.trueBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
      }
    `}
`;
export const Linkedin = styled(LinkedinIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.trueBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
      }
    `}
`;

export const Insta = styled(InstaIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.raisinBlack};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.trueBlue};
  }

  ${({ toggleDarkMode }) =>
    toggleDarkMode &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.color.dodgerBlue};
      }
    `}
`;
