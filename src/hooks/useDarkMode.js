import React from 'react';

import {useLocalStorage} from './useLocalStorage';



export const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)

    const [darkModeValue, setDarkMode] = useLocalStorage("darkMode",true);
    console.log("in useDarkMode");
    const theBody = document.getElementById('body');
    console.log("The body is ", theBody);
    if(darkMode) {
        theBody.classList.add('dark-mode');
    }else {
        theBody.classList.remove('dark-mode');
    }
    return useDarkMode;
    // return  [darkModeValue, setDarkMode];
}

