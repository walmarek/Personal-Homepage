import { Container } from "../Container";
import {
  ImageHeader,
  Span,
  EmailIcon,
  Aside,
  ContainerInfo,
  ContainerTitle,
  ContainerElement,
} from "./styled";
import myImage from "../images/marek-wal-photo.jpg";
import { Button } from "../Button";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { Link } from "../Link";
import { email } from "../email";

export const Header = () => {
  return (
    <>
      <Container>
        <ImageHeader src={myImage} alt="photo marek wal" />
        <Aside>
          <ContainerElement>THIS IS</ContainerElement>
          <ContainerTitle>Marek Wal</ContainerTitle>
          <ContainerInfo>
            👨🏻💻I'm enthusiastic & ambitious Trainee Frontend Developer with
            great passion for IT, currently looking for new job opportunities.
          </ContainerInfo>
          <Link href={`mailto:${email}`} title={email}>
            <Button>
              <EmailIcon />
              <Span>Hire Me</Span>
            </Button>
          </Link>
        </Aside>
        <ToggleDarkMode />
      </Container>
    </>
  );
};
