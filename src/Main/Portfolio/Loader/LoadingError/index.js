import { Button } from "../../../../Button";
import useToggleDarkTheme from "../../../../useToggleDarkTheme";
import { PortfolioContent } from "../../styled";

import { ErrorIcon, ErrorInfo, ErrorTitle } from "./styled";

export const LoadingError = () => {
const darkTheme = useToggleDarkTheme()

  return (
    <PortfolioContent >
      <ErrorIcon toggleDarkMode={darkTheme}/>
      <ErrorTitle toggleDarkMode={darkTheme}>Ooops! Something went wrong...</ErrorTitle>
      <ErrorInfo toggleDarkMode={darkTheme}>
        Sorry, failed to load GitHub projects.
        <br />
        You can check them directly on GitHub.
      </ErrorInfo>
      <Button>Go to GitHub</Button>
    </PortfolioContent>
  );
};
