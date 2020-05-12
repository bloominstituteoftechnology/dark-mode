import React from 'react';

import {useLocalStorage} from './useLocalStorage';



export const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)
    // console.log("useDarkMode entry darkmode, ", darkMode);
    const theBody = document.getElementsByTagName("body")[0];

    const [darkModeValue, setDarkMode] = useLocalStorage("darkMode",darkMode);
    // console.log("in useDarkMode, value ", darkModeValue);
    if(darkModeValue) {
        theBody.classList.add('dark-mode');
    }else {
        theBody.classList.remove('dark-mode');
    }
    return [darkModeValue,setDarkMode];
    // return  [darkModeValue, setDarkMode];
}

