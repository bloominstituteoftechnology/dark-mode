import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false);
    return[darkMode, setDarkMode];
}