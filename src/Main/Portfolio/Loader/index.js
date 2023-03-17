import useToggleDarkTheme from "../../../useToggleDarkTheme";
import { useSelector } from "react-redux";
import { selectLoadingState } from "../../../appSlice";
import { LoadingError } from "./LoadingError";
import { Spinner, LoaderWrapper, SpinnerInfo, LoadingMessage } from "./styled";

export const Loader = () => {
  const darkTheme = useToggleDarkTheme();
  const loadingState = useSelector(selectLoadingState);

  return (
    <LoaderWrapper>
      {!loadingState ? (
        <>
          <LoadingMessage toggleDarkMode={darkTheme}>
            Please wait, projects are being loaded.
          </LoadingMessage>
          <Spinner toggleDarkMode={darkTheme} />
          <SpinnerInfo>Loading....</SpinnerInfo>
        </>
      ) : (
        ""
      )}
      {loadingState === "error" ? <LoadingError /> : ""}
    </LoaderWrapper>
  );
};
