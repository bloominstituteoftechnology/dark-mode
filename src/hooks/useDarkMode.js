import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (storedValue) => {
  const [value, setValue] = useLocalStorage(storedValue);
  useEffect(() => {
    if (value) {
      return document.body.classList.add("dark-mode");
    } else {
      return document.body.classList.remove("dark-mode");
    }
  }, [value]);
  return [value, setValue]
};
