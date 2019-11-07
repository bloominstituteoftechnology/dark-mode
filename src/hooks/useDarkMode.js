import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {
        if(darkMode === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
    
};
    // console.log(darkMode);
