import { ContactLink } from "../ContactLink";
import { Container } from "../Container";
import { Link } from "../Link";
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
  return (
    <Container>
      <FooterContent>
        <ContentElement>LET'S TALK</ContentElement>
        <ContactLink>
          <Link href={"mailto: walmarek1987@gmail.com"}>
            <ContentTitle>walmarek1987@gmail.com</ContentTitle>
          </Link>
        </ContactLink>
        <ContentInfo>
          I've been developing Frontend skills since June 2022 and my target is
          to master abilities and competencies needed for creating web
          aplications. I always take pride of my work which I do and all tasks
          commited.
        </ContentInfo>
        <FooterIcons>
          <ContactLink>
            <Link href={"https://github.com/walmarek"} rel="me" target="_blank">
              <GitHub />
            </Link>
          </ContactLink>
          <ContactLink>
            <Link
              href={"https://www.facebook.com/profile.php?id=100090407584455"}
              rel="me"
              target="_blank"
            >
              <Facebook />
            </Link>
          </ContactLink>
          <ContactLink>
            <Link
              href={"https://www.linkedin.com/in/marek-wal-10902526a/"}
              rel="me"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </ContactLink>
          <ContactLink>
            <Link
              href={"https://www.instagram.com/best_wood_world/"}
              rel="me"
              target="_blank"
            >
              <Insta />
            </Link>
          </ContactLink>
        </FooterIcons>
      </FooterContent>
    </Container>
  );
};
