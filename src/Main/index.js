import useToggleDarkTheme from "../useToggleDarkTheme";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";

export const Main = () => {
const darkTheme = useToggleDarkTheme()

  return (
    <>
      <Skills toggleDarkMode={darkTheme}/>
      <ToLearn toggleDarkMode={darkTheme}/>
      <Portfolio toggleDarkMode={darkTheme}/>
    </>
  );
};
