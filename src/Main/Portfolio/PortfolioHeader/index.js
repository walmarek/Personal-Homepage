import { GitHubIcon, PortfolioTitle, UnderTitle } from "./styled";
import useToggleDarkTheme from "../../../useToggleDarkTheme";

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
