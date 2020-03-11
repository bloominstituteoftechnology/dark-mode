import { React, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

// Setup Darkmode


const useDarkMode = (key, initialValue) => {

    const [darkModeTrue, setDarkModeTrue] = useLocalStorage(key, initialValue);

    useEffect (() => {
        if (darkModeTrue == true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [ darkModeTrue ]);

        return [ darkModeTrue, setDarkModeTrue ]
}

export default useDarkMode;