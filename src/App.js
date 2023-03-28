import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectDarkTheme } from "./appSlice";
import { Footer } from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Main } from "./Main";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const darkMode = useSelector(selectDarkTheme);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
