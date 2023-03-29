import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../images/message-icon.svg";

export const ImageHeader = styled.img`
  max-width: 398px;
  max-height: 398px;
  width: 30vw;
  margin-right: 66px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 128px;
  }
`;

export const Span = styled.span`
  margin-left: 28px;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const EmailIcon = styled(MessageIcon)`
`;

export const Aside = styled.header`
  margin-top: 68px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 12px;
  }
`;

export const ContainerElement = styled.span`
  font-size: 12px;
  line-height: 130%;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.containerElementColor};
`;

export const ContainerInfo = styled.article`
  color: ${({ theme }) => theme.color.containerInfoColor};
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 24px;
  }
`;

export const ContainerTitle = styled.h1`
  color: ${({ theme }) => theme.color.containerTitleColor};
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin-top: 12px;
  margin-bottom: 35px;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 28px;
  }
`;
