import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = initialValue => {
  const [isDarkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  const body = document.querySelector("body");
  useEffect(() => {
    isDarkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};
