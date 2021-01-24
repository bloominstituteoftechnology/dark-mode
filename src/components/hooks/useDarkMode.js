import React from 'react';
import useLocalStorage from './useLocalStorage';



const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage('darkmode', false);

    return [darkmode, setDarkMode];
}

export default useDarkMode;