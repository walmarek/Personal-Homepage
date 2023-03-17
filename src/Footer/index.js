import useToggleDarkTheme from "../useToggleDarkTheme";
import { ContactLink } from "../ContactLink";
import { Container } from "../Container";
import {
  FooterContent,
  ContentElement,
  ContentInfo,
  ContentTitle,
  Facebook,
  FooterIcons,
  GitHub,
  Insta,
  Linkedin,
} from "./styled";

export const Footer = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <Container toggleDarkMode={darkTheme}>
      <FooterContent>
        <ContentElement>LET'S TALK</ContentElement>
        <ContactLink href={"mailto: walmarek1987@gmail.com"}>
          <ContentTitle toggleDarkMode={darkTheme}>
            walmarek1987@gmail.com
          </ContentTitle>
        </ContactLink>
        <ContentInfo toggleDarkMode={darkTheme}>
          I've been developing Frontend skills since June 2022 and my target is
          to master abilities and competencies needed for creating web
          aplications. I always take pride of my work which I do and all tasks
          commited.{" "}
        </ContentInfo>
        <FooterIcons>
          <ContactLink
            href={"https://github.com/walmarek"}
            rel="me"
            target="_blank"
          >
            <GitHub toggleDarkMode={darkTheme} />
          </ContactLink>
          <ContactLink
            href={"https://www.facebook.com/profile.php?id=100090407584455"}
            rel="me"
            target="_blank"
          >
            <Facebook toggleDarkMode={darkTheme} />
          </ContactLink>
          <ContactLink
            href={"https://www.linkedin.com/in/marek-wal-10902526a/"}
            rel="me"
            target="_blank"
          >
            <Linkedin toggleDarkMode={darkTheme} />
          </ContactLink>
          <ContactLink
            href={"https://www.instagram.com/best_wood_world/"}
            rel="me"
            target="_blank"
          >
            <Insta toggleDarkMode={darkTheme} />
          </ContactLink>
        </FooterIcons>
      </FooterContent>
    </Container>
  );
};
