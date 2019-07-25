import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage('darkmode')
  useEffect(() => {
    const darkModeActive = localStorage.getItem('darkmode') === "true";
  })
};

export default useDarkMode;
