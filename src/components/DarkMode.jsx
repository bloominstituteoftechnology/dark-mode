import { useEffect } from 'react';
import LocalStorage from './LocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = LocalStorage(key, initialValue);

    useEffect(() => {
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;