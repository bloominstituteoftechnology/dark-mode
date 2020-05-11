import React from 'react';

import useLocalStorage from './useLocalStorage';



const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)

    const [storedDarkMode, setDarkValue] = useLocalStorage("darkMode",false);
    

    return  [storedDarkMode];
}

