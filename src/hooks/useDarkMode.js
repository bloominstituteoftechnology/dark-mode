  
import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage.js';


const useDarkMode = (initialValue) => {
    
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    
    useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode]

}

export default useDarkMode;
