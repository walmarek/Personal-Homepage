import useToggleDarkTheme from "../useToggleDarkTheme";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { mySkills, toLearnSkills } from "./Skills/techSkills";

export const Main = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <>
      <Skills
        toggleDarkMode={darkTheme}
        techSkills={mySkills}
        title="My skillset includes 🛠️"
      />
      <Skills
        toggleDarkMode={darkTheme}
        techSkills={toLearnSkills}
        title="What I want to learn next 🚀"
      />
      <Portfolio toggleDarkMode={darkTheme} />
    </>
  );
};
