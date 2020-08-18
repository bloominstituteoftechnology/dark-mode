import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = ( initialValue ) => {
    
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {

        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

    },[darkMode])

    return [darkMode, setDarkMode];
}