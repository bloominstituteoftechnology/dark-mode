import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    return darkMode === false
      ? () => {
          document.body.className = "dark-mode";
        }
      : () => {
          document.body.className = null;
        };
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
