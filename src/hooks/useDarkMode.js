import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('darkmode', initialValue);

    useEffect(() => {
        if (darkMode) {
            console.log('dark mode enabled!')
        } else {
            console.log('dark mode disabled!');
        }
    }, [darkMode])

    return [ darkMode, setDarkMode ];
}