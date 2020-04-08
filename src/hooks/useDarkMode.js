import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {

    const [view, setView] = useLocalStorage('View colour scheme enabled')

    useEffect(() => {
        let body = document.getElementById('body');
        view : body.className += 'dark-mode' ? body.classList.remove('darkmode')
    }, [view])

    return [view, setView];
} //function end bracker