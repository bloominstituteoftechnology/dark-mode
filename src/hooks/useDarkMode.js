import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key);

    useEffect(() => {
        const body = document.querySelector('body');
        value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
         
    }, [value])

    return [value, setValue];
}