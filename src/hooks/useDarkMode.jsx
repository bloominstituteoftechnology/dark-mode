import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
 
    const [darkMode, setDarkMode] = useLocalStorage(false);

    useEffect(() => {
        if (darkMode === true){
            document.getElementById('body').classList.add('dark-mode')
        } else {
            document.getElementById('body').classList.remove('dark-mode')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];

};

