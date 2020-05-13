import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage('light', initialValue)
    const test = document.querySelector('body')
    useEffect(() => {
        if (mode){
            test.classList.add('dark-mode')
        } else {
            test.classList.remove('dark-mode')
        }
    }, [mode])
    return [mode, setMode]
}