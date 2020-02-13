import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)
    useEffect(() => {
        if (darkMode) {
            document.querySelector('body')
            .classList.add('dark-mode')
        } else {
            document.querySelector('body')
            .classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, setDarkMode];
}