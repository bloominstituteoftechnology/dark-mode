import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  const bodyTag = document.querySelector("body");
  useEffect(() => {
    if (darkMode === true) {
      bodyTag.classList.add("dark-mode");
    } else {
      bodyTag.classList.remove("dark-mode");
    }
  });

  return [darkMode, setDarkMode];
};
