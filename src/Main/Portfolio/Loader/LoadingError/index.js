import { Button } from "../../../../Button";
import { ContactLink } from "../../../../ContactLink";
import useToggleDarkTheme from "../../../../useToggleDarkTheme";
import { PortfolioContent } from "../../PortfolioContent";

import { ErrorIcon, ErrorInfo, ErrorTitle } from "./styled";

export const LoadingError = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <PortfolioContent>
      <ErrorIcon toggleDarkMode={darkTheme} />
      <ErrorTitle toggleDarkMode={darkTheme}>
        Ooops! Something went wrong...
      </ErrorTitle>
      <ErrorInfo toggleDarkMode={darkTheme}>
        Sorry, failed to load GitHub projects.
        <br />
        You can check them directly on GitHub.
      </ErrorInfo>
      <ContactLink
        href={"https://github.com/walmarek"}
        rel="me"
        target="_blank"
      >
        <Button>Go to GitHub</Button>
      </ContactLink>
    </PortfolioContent>
  );
};
