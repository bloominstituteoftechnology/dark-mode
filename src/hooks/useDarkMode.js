import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('');

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');}, [darkMode]);
    
    return [darkMode, setDarkMode];
}

export default useDarkMode