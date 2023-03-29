import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../images/shape-icon.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin-icon.svg";
import { ReactComponent as InstaIcon } from "../images/insta-icon.svg";

export const FooterContent = styled.footer`
  max-width: 670px;
  margin-bottom: 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 31px;
  }
`;

export const ContentElement = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.contentElementColor};
`;

export const ContentTitle = styled.h2`
  color: ${({ theme }) => theme.color.contentTitleColor};
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0.05em;
  margin-top: 24px;
  margin-bottom: 35px;
  transition: 0.4s ease-in;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.iconHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 22px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const ContentInfo = styled.div`
  color: ${({ theme }) => theme.color.contentInfoColor};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 32px;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 24px;
  cursor: pointer;
`;

export const GitHub = styled(GitHubIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.iconColor};
  transition: 0.4s ease-in;

  :hover {
    color: ${({ theme }) => theme.color.iconHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const Facebook = styled(FacebookIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.iconColor};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.iconHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const Linkedin = styled(LinkedinIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.iconColor};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.iconHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const Insta = styled(InstaIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.iconColor};
  transition: 0.4s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.iconHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
