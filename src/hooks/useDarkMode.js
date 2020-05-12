import React from 'react';

import {useLocalStorage} from './useLocalStorage';



export const useDarkMode = darkMode => {
    // useLocalStorage(darkMode)
    const theBody = document.getElementsByTagName("body");

    const [darkModeValue, setDarkMode] = useLocalStorage("darkMode",true);
    console.log("in useDarkMode");

    // const setDarkMode = (newValue) => {
    // setDarkMode = newValue => {
    //     setValue(newValue); //changes state value
    //     window.localStorage
    // }
    
    
    if(darkModeValue) {
        theBody[0].classList.add('dark-mode');
    }else {
        theBody[0].classList.remove('dark-mode');
    }
    return [darkModeValue,setDarkMode];
    // return  [darkModeValue, setDarkMode];
}

