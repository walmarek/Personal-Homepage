import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { mySkills, toLearnSkills } from "./Skills/techSkills";

export const Main = () => {

  return (
    <>
      <Skills techSkills={mySkills} title="My skillset includes 🛠️" />
      <Skills techSkills={toLearnSkills} title="What I want to learn next 🚀" />
      <Portfolio />
    </>
  );
};
