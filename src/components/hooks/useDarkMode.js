import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [someValue, setSomeValue] = useLocalStorage("dark");

  useEffect(() => {
    someValue
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [someValue]);

  return [someValue, setSomeValue];
}

export default useDarkMode;
