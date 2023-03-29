import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
`;

export const SpinnerInfo = styled.span`
  position: relative;
  top: -100px;
  font-size: 20px;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    top: -70px;
  }
`;

export const Spinner = styled.div`
  border-top: 10px solid ${({ theme }) => theme.color.spinnerBorderBottom};
  border-bottom: 10px solid #eee;
  border-right: 10px solid #eee;
  border-left: 10px solid #eee;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  animation: spin 1.4s linear infinite;
  transition: 0.4s ease-in;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 120px;
    height: 120px;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingMessage = styled.span`
  margin: 88px auto 48px;
  color: ${({ theme }) => theme.color.loadingMessageColor};
  transition: 0.4s ease-in;
`;
