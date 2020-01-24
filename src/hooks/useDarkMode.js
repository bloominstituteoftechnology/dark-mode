import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (mode) =>{
    const [darkMode, setDarkMode] = useLocalStorage(mode);

    useEffect(() =>{
        const body = document.querySelector('body');
        if(darkMode){
            body.className = "dark-mode";
        }
        else{
            body.className = "";
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;