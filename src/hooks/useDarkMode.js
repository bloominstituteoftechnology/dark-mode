import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark-mode");

  useEffect(() => {
    const body = window.document.body;
    if (value) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};