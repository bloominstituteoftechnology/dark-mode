import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react'

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);
    const grabCode = document.querySelector('body');
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    
    useEffect(() => {
        console.log('', darkMode)
        if (darkMode === true) {
            return grabCode.classList.add('dark-mode')
        }
        return grabCode.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode,toggleMode];
}