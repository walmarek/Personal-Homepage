import { Circle, DarkMode, DarkModeButton, MoonIcon, SunIcon } from "./styled";
import NightIcon from "../../images/weather-night.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleDarkTheme } from "../../appSlice"; 


export const ToggleDarkMode = () => {
    const darkTheme = useSelector(selectDarkTheme);
    const dispatch =useDispatch()

  return (
    <DarkMode ><span>DARK MODE{darkTheme ? " ON" : " OFF"}</span>
      <DarkModeButton toggleDarkMode={darkTheme} onClick={() => dispatch(toggleDarkTheme())}> 
         <Circle toggleDarkMode={darkTheme}>{darkTheme ? <SunIcon />:
         <MoonIcon src={NightIcon} />}</Circle>
      </DarkModeButton>
    </DarkMode>
  );
};
