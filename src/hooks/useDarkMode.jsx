import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initial) => {
    const [useDark, setUseDark] = useLocalStorage('darkMode', initial);

    useEffect(() => {
        useDark ? document.querySelector('body').classList.add('dark-mode')
        : document.querySelector('body').classList.remove('dark-mode')
    }, [useDark])

    return [useDark, setUseDark];
}