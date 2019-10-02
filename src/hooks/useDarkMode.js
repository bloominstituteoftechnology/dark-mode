import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('darkmode', initialValue);

    // useEffect(() => {
    //     if (darkMode) {
    //         //document.body.classList.add('dark-mode');
    //         console.log('dark mode enabled!')
    //     } else {
    //         //document.body.classList.remove('dark-mode');
    //         console.log('dark mode disabled!');
    //     }
    // }, [darkMode])

    return [ darkMode, setDarkMode ];
}