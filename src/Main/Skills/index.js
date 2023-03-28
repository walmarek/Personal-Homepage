import { Box } from "../Box";
import { EllipseIcon, Item, List, SkillsTitle } from "./styled";

export const Skills = ({ techSkills, title }) => {

  return (
    <Box>
      <SkillsTitle>{title}</SkillsTitle>
      <List>
        {techSkills.map((skill) => (
          <Item key={skill}>
            <EllipseIcon/>
            {skill}
          </Item>
        ))}
      </List>
    </Box>
  );
};
