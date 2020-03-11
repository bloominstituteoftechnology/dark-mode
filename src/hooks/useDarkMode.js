import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (initialValue) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", initialValue);
    const updateDarkMode = (value) => {
        setIsDarkMode(value);
    }
    useEffect(() => {
        if (isDarkMode){
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    },[isDarkMode])
    return [isDarkMode, updateDarkMode];
}