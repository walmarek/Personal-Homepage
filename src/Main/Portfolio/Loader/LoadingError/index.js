import { Button } from "../../../../Button";
import { Link } from "../../../../Link";
import { PortfolioContent } from "../../PortfolioContent";
import { ErrorIcon, ErrorInfo, ErrorTitle } from "./styled";

export const LoadingError = () => {
  return (
    <PortfolioContent>
      <ErrorIcon />
      <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
      <ErrorInfo>
        Sorry, failed to load GitHub projects.
        <br />
        You can check them directly on GitHub.
      </ErrorInfo>
      <Link href={"https://github.com/walmarek"} rel="me" target="_blank">
        <Button>Go to GitHub</Button>
      </Link>
    </PortfolioContent>
  );
};
