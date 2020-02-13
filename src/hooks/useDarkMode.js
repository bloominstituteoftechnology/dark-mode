import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage (initialValue)
    
    useEffect (() => {
        if (darkMode){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, setDarkMode];
};