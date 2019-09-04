import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const body = document.querySelector('body')
    const [value, setValue] = useLocalStorage('dark');
    useEffect(() => {
        if (value) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value]);
    return [value, setValue];
}

export default useDarkMode;