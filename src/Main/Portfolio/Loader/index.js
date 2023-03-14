import useToggleDarkTheme from "../../../useToggleDarkTheme";
import { LoadingError } from "./LoadingError";
import { Spinner, LoaderWrapper, SpinnerInfo, LoadingMessage } from "./styled";

export const Loader = () => {
const darkTheme = useToggleDarkTheme()

  return (
    <LoaderWrapper >
      {/* <LoadingMessage toggleDarkMode={darkTheme}>Please wait, projects are being loaded.</LoadingMessage> */}
      {/* <Spinner toggleDarkMode={darkTheme}/>
      <SpinnerInfo>Loading....</SpinnerInfo> */}
      
      <LoadingError />
    </LoaderWrapper>
  );
};
