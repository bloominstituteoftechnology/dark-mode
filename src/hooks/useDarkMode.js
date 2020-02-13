import { useLocalStorage} from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key , initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(
        key, initialValue);

    useEffect(() => {
        darkMode === true ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
    });
    return[darkMode, setDarkMode];
};