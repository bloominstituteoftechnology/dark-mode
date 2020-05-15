import { useEffect } from "react";
import { useLocalStorage }from "./useLocalStorage";

export const useDarkMode =() => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode");
  useEffect(() => {
    // if (darkMode === true) {
    //   document.body.classList.add("dark-mode");
    // } else {
    //   document.body.classList.remove("dark-mode");
    // }
    darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove('dark-mode')

  }, [darkMode]);
const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
}
  return [darkMode, toggleMode];
}
