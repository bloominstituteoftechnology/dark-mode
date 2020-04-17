import React, { useState, useEffect } from "react"; // useState for without custom localStorage hook
import useLocaleStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocaleStorage("");

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
