import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage(key, initialValue);


    return [mode,setMode];
}


export default useDarkMode;

