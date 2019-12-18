import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [enable, setEnable] = useLocalStorage("disable", false);

  useEffect(() => {
    // const isDark = localStorage.getItem("enabled") === true;
    if (enable === false) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    // alert("Dark Mode Enabled");
  }, [enable]);

  return [enable, setEnable];
};
