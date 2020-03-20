import React, { useEffect } from 'react';
import {useLocalStorage}  from './useLocalStorage';

const useDarkMode = () => {
    const [value,setValue] = useLocalStorage('')
    console.log(value)
    useEffect(() => {
        // const Body = document.getElementById("body")
        if(window.localStorage.getItem('key')){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    },[value])
    return [value,setValue];
}

export default useDarkMode;
