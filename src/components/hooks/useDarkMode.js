import {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage"

const useDarkMode = event => {

    const [darkMode, setDarkMode] = useLocalStorage("darkmode", event);
    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode');
        } else 
        if (!darkMode) {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];


}

export default useDarkMode;