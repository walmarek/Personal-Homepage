import useToggleDarkTheme from "../useToggleDarkTheme";
import { Portfolio } from "./Portfolio";
import { SkillsList } from "./SkillsList";
import { mySkills, toLearnSkills } from "./techSkills";


export const Main = () => {
const darkTheme = useToggleDarkTheme()

  return (
    <>
      <SkillsList toggleDarkMode={darkTheme} techSkills={mySkills} title="My skillset includes 🛠️"/>
      <SkillsList toggleDarkMode={darkTheme} techSkills={toLearnSkills} title="What I want to learn next 🚀"/>
      <Portfolio toggleDarkMode={darkTheme}/>
    </>
  );
};
