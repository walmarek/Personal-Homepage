import { GitHubIcon, PortfolioTitle, UnderTitle } from "./styled";
import useToggleDarkTheme from "../../../useToggleDarkTheme";
import { PortfolioContent } from "../PortfolioContent";

export const PortfolioHeader = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <PortfolioContent>
      <GitHubIcon toggleDarkMode={darkTheme} />
      <PortfolioTitle toggleDarkMode={darkTheme}>Portfolio</PortfolioTitle>
      <UnderTitle toggleDarkMode={darkTheme}>My recent projects</UnderTitle>
    </PortfolioContent>
  );
};
