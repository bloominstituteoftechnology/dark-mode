import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [ darkModeEnabled, setDarkModeEnabled ] = useLocalStorage(key, initialValue);
  console.log(document.body);

  const toggleDarkMode = e => {
    e.preventDefault();

    return darkModeEnabled ? setDarkModeEnabled(false) : setDarkModeEnabled(true);
  };

  useEffect(() => {
    // used so it doesn't render every time
    if (darkModeEnabled == true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [ darkModeEnabled ]);

  return [ darkModeEnabled, setDarkModeEnabled, toggleDarkMode ];
};

export default useDarkMode
