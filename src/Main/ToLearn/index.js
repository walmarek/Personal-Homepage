import useToggleDarkTheme from "../../useToggleDarkTheme";
import { Box } from "../Box";
import { List} from "../List";
import { SkillsTitle } from "../SkillsTitle";

export const ToLearn = () => {
const darkTheme = useToggleDarkTheme()

    return (
        <Box toggleDarkMode={darkTheme}>
      <SkillsTitle toggleDarkMode={darkTheme}>What I want to learn next 🚀</SkillsTitle>
      <List></List>
    </Box>
    )
};
