import React, {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode", value);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'); 
    }, [darkMode]) 

    return [darkMode, setDarkMode]
}