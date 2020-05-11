import React from 'react';

import {useLocalStorage} from './useLocalStorage';



export const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)

    const [storedDarkMode, setDarkValue] = useLocalStorage("darkMode",true);
    console.log("in useDarkMode");
    if(storedDarkMode) {
        const theBody = document.getElementById('body')
        theBody.classList.add('dark-mode');
    }



    return  [storedDarkMode];
}

