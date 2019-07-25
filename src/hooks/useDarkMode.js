import useLocalStorage from "./useLocalStorage";
import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("");

  // check if true add darkmode to body element ? :
  // document.querySelector, classList.add?

  useEffect(() => {
    const body = window.document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
