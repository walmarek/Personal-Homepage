import { Container } from "../Container/styled";
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
import useToggleDarkTheme from "../useToggleDarkTheme";

export const Header = () => {
  const darkTheme = useToggleDarkTheme();

  return (
    <>
      <Container toggleDarkMode={darkTheme}>
        <ImageHeader src={myImage} alt="photo marek wal" />
        <Aside>
          <ContainerElement>THIS IS</ContainerElement>
          <ContainerTitle toggleDarkMode={darkTheme}>Marek Wal</ContainerTitle>
          <ContainerInfo>
            👨🏻💻I'm enthusiastic & ambitious Trainee Frontend Developer with
            great passion for IT, currently looking for new job opportunities.
          </ContainerInfo>
          <Button>
            <EmailIcon />
            <Span>Hire Me</Span>
          </Button>
        </Aside>
        <ToggleDarkMode />
      </Container>
    </>
  );
};
