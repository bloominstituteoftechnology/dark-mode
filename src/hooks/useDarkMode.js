import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [toggleOnorOff, setOnorOff] = useLocalStorage("key", false);
  useEffect(() => {
    toggleOnorOff
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [setOnorOff]);
  return ["storedValue", "setStoredValue"];
}
export default useDarkMode;