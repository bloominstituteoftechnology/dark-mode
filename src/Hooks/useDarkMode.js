import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'



export const useDarkMode = (darkM) => {

    const [darkMode, setDarkMode] = useLocalStorage("darkModeIsOn", darkM)

    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
            body.className = "dark-mode";
        } else { body.className = "" };
    }, [darkMode]);

    return [darkMode, setDarkMode];

}

export default useDarkMode;