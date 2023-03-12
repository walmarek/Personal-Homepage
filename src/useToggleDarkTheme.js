import { useSelector } from "react-redux";
import { selectDarkTheme } from "./appSlice";

const useToggleDarkTheme = () => {
  const darkTheme = useSelector(selectDarkTheme);
  return darkTheme;
};

export default useToggleDarkTheme;
