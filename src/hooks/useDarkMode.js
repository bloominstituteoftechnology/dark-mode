import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (bool) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", bool);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}; 