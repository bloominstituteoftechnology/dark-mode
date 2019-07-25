import React, { useState, useEffect } from "react";
import UseLocalStorage from "./useLocalStorage";

export default function UseDarkMode() {
  const [darkMode, setDarkMode] = UseLocalStorage("mode");
  useEffect(() => {
    darkMode === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
