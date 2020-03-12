import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initState => {
  const [value, setValue] = useLocalStorage("darkMode", initState);
  useEffect(() => {
    if (value) {
      if (!document.body.classList.contains("dark-mode")) {
        document.body.classList.add("dark-mode");
      }
      const linkSelector = document.querySelectorAll(".navLink");
      linkSelector.forEach(item => {
        item.classList.add("navLinkDark");
      });
    } else {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      }
      const linkSelector = document.querySelectorAll(".navLink");
      linkSelector.forEach(item => {
        item.classList.remove("navLinkDark");
      });
    }
  }, [value]);

  return [value, setValue];
};
