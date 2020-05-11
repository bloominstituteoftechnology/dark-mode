import React from 'react';

import useLocalStorage from './useLocalStorage';



const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)

    const [storedDarkMode] = useLocalStorage("darkMode",true);
    

    return  [darkMode];
}

