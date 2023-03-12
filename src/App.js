
import { Footer } from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Main } from "./Main";
import useToggleDarkTheme from "./useToggleDarkTheme";

function App() {
  const darkTheme = useToggleDarkTheme()

  return (
    <>
    <GlobalStyle toggleDarkMode={darkTheme}/>
    <Header />
    <Main />
    <Footer />
    </>
    
  );
}

export default App;
