import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode(key, initialValue) {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
  const onChange = (newValue) => {
    setStoredValue(newValue)
  }
  useEffect(() => {
    return storedValue
      ? window.document.body.classList.add("dark-mode")
      : window.document.body.classList.remove("dark-mode");
  }, [storedValue]);
  return [storedValue, setStoredValue, onChange];
}
export default useDarkMode;