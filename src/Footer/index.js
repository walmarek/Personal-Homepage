import { Container } from "../Container/styled";
import useToggleDarkTheme from "../useToggleDarkTheme";
import { Content, ContentElement, ContentInfo, ContentTitle, FacebookLink, FooterIcons, GitHubLink, InstaLink, LinkedinLink } from "./styled";

export const Footer = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <Container toggleDarkMode={darkTheme}>
      <Content>
        <ContentElement>LET'S TALK</ContentElement>
        <ContentTitle toggleDarkMode={darkTheme}>
          walmarek1987@gmail.com
        </ContentTitle>
        <ContentInfo toggleDarkMode={darkTheme}>
          I've been developing Frontend skills since June 2022 and my target is
          to master abilities and competencies needed for creating web
          aplications. I always take pride of my work I do and all tasks
          commited.{" "}
        </ContentInfo>
        <FooterIcons><GitHubLink toggleDarkMode={darkTheme}/><FacebookLink toggleDarkMode={darkTheme}/><LinkedinLink toggleDarkMode={darkTheme}/><InstaLink toggleDarkMode={darkTheme}/></FooterIcons>
      </Content>
    </Container>
  );
};
