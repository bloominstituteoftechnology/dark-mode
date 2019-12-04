import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage('dark-Mode', initialValue)
    useEffect(() => {
        if (storedValue === true) {
            document.body.classList.add("dark-mode");
        } else if (storedValue === false) {
            document.body.classList.remove("dark-mode");
        }
    }, [storedValue])

    return [storedValue, setValue]
}