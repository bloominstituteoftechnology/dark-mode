import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDark");

  useEffect(() => {
    isDarkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [isDarkMode]);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};
