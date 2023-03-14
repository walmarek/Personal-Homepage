import { GitHubIcon, PortfolioTitle, UnderTitle } from "./styled";
import useToggleDarkTheme from "../../../useToggleDarkTheme";
import { PortfolioContent } from "../styled";


export const PortfolioHeader = () => {
const darkTheme = useToggleDarkTheme()

  return (
    <PortfolioContent>
      <GitHubIcon />
      <PortfolioTitle toggleDarkMode={darkTheme}>Portfolio</PortfolioTitle>
      <UnderTitle toggleDarkMode={darkTheme}>My recent projects</UnderTitle>
    </PortfolioContent>
  );
};
