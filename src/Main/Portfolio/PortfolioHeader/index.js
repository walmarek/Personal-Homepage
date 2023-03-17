import useToggleDarkTheme from "../../../useToggleDarkTheme";
import { GitHubIcon, PortfolioTitle, UnderTitle } from "./styled";

export const PortfolioHeader = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <>
      <GitHubIcon toggleDarkMode={darkTheme} />
      <PortfolioTitle toggleDarkMode={darkTheme}>Portfolio</PortfolioTitle>
      <UnderTitle toggleDarkMode={darkTheme}>My recent projects</UnderTitle>
    </>
  );
};
