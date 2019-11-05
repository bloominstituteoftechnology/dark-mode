import React, {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode", key);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'); 
    }, [darkMode]) 

    return [darkMode, setDarkMode]
}