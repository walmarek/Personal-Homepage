import useToggleDarkTheme from "../../useToggleDarkTheme";
import { Box } from "../Box";
import { EllipseIcon, Item, List, SkillsTitle } from "./styled";

export const SkillsList = ({techSkills, title}) => {
const darkTheme =useToggleDarkTheme()

 const skills = techSkills.map((item, index) => 
<Item key={index}>
<EllipseIcon/>{item.skill}
</Item>
 )

  return (
    <Box toggleDarkMode={darkTheme}>
      <SkillsTitle toggleDarkMode={darkTheme}>{title}</SkillsTitle>
      <List>{skills}
      </List>
    </Box>
  )
};
