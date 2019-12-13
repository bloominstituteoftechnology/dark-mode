import {useState, useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("");
    useEffect(() => {
        return darkMode
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode");
    }, [darkMode]);

    return [darkMode, setDarkMode];
};