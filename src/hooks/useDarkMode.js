import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue)
   
    useEffect(() => {
        if(darkMode === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}

