import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const mode = document.querySelector(".App");
    values
      ? mode.classList.add("dark-mode")
      : mode.classList.remove("dark-mode");
  }, [values]);
  return [values, setValues];
};
