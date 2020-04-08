import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode(key) {

    const [view, setView] = useLocalStorage(key)

    useEffect(() => {
        const body = document.querySelector('body');
        view ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [view])

    return [view, setView];

} //function end bracker