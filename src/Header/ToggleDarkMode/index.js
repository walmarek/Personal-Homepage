import { useDispatch, useSelector } from "react-redux";
import { Circle, DarkMode, DarkModeButton, MoonIcon, Span, SunIcon } from "./styled";
import NightIcon from "../../images/weather-night.svg";
import { selectDarkTheme, toggleDarkTheme } from "../../appSlice";

export const ToggleDarkMode = () => {
  const darkMode = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  return (
    <DarkMode>
      <Span>DARK MODE{darkMode ? " ON" : " OFF"}</Span>
      <DarkModeButton
       
        onClick={() => dispatch(toggleDarkTheme())}
      >
        <Circle animationCircle={darkMode}>
          {darkMode ? <SunIcon /> : <MoonIcon src={NightIcon} />}
        </Circle>
      </DarkModeButton>
    </DarkMode>
  );
};
