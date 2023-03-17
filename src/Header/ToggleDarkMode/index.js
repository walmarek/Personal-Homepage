import { useDispatch, useSelector } from "react-redux";
import { Circle, DarkMode, DarkModeButton, MoonIcon, Span, SunIcon } from "./styled";
import NightIcon from "../../images/weather-night.svg";
import { selectDarkTheme, toggleDarkTheme } from "../../appSlice";

export const ToggleDarkMode = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  return (
    <DarkMode>
      <Span>DARK MODE{darkTheme ? " ON" : " OFF"}</Span>
      <DarkModeButton
        toggleDarkMode={darkTheme}
        onClick={() => dispatch(toggleDarkTheme())}
      >
        <Circle toggleDarkMode={darkTheme}>
          {darkTheme ? <SunIcon /> : <MoonIcon src={NightIcon} />}
        </Circle>
      </DarkModeButton>
    </DarkMode>
  );
};
