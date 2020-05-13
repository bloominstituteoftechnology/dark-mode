import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [someValue, setValue] = useLocalStorage('dark-mode');
    useEffect( () => {
        if (someValue) {
            window.document.body.classList.add('dark-mode')
        } else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [someValue])
    return [someValue,setValue]
}