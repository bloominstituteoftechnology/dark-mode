import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage(key)
    useEffect(()=>{
        darkValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [])

    return[darkValue, setDarkValue]

};

export default useDarkMode;