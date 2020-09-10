// importing dependancies

import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (initalValue) => {
  // setting state to local Storage

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initalValue);

  //   useEffect to toggle darkmode

  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
