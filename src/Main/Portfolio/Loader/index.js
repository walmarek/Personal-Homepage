import { useSelector } from "react-redux";
import { selectLoadingState } from "../../../appSlice";
import { LoadingError } from "./LoadingError";
import { Spinner, LoaderWrapper, SpinnerInfo, LoadingMessage } from "./styled";

export const Loader = () => {
  const loadingState = useSelector(selectLoadingState);

  return (
    <LoaderWrapper>
      {!loadingState ? (
        <>
          <LoadingMessage >
            Please wait, projects are being loaded.
          </LoadingMessage>
          <Spinner/>
          <SpinnerInfo>Loading....</SpinnerInfo>
        </>
      ) : (
        ""
      )}
      {loadingState === "error" && (<LoadingError />)}
    </LoaderWrapper>
  );
};
