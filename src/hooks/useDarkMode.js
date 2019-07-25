import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage('darkmode')
  useEffect(() => {
    const darkModeActive = localStorage.getItem('darkmode') === "true";
    console.log('darkmode active:', darkModeActive);
    darkModeActive ? document.body.classList.add("dark-mode") :
    document.body.classList.remove("dark-mode");
  }, [storedValue])
  return [storedValue, setStoredValue]
};

export default useDarkMode;
