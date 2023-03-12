import useToggleDarkTheme from "../../useToggleDarkTheme";
import { Box } from "../Box";
import { List, SkillItem, StyledListItem } from "../List";
import { SkillsTitle } from "../SkillsTitle";

export const Skills = ({mySkills}) => {
const darkTheme =useToggleDarkTheme()

  const listItem = mySkills?.map(item => 
    <SkillItem>
      <StyledListItem />{item.mySkill}
    </SkillItem>
    );

  return (
    <Box toggleDarkMode={darkTheme}>
      <SkillsTitle toggleDarkMode={darkTheme}>My skillset includes 🛠️</SkillsTitle>
      <List>
        {listItem}
      </List>
    </Box>
  )
};
