import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
  const [active, setActive] = useLocalStorage("darkMode", key);
  useEffect(() => {
    if (active === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [active]);

  return [active, setActive];
};

export default useDarkMode;
