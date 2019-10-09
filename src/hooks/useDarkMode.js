import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValue) {
    const[someValue, setSomeValue] = useLocalStorage('key', false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (someValue === true) {
        body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }

    }, [someValue])

    return [someValue, setSomeValue]
}