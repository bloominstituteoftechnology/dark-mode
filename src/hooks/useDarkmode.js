import React, { useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark')

 
   useEffect(() => {
       darkMode === true ? document.body.classList.add('dark-mode') :
                            document.body.classList.remove('dark-mode')
   }, [darkMode])
    return [darkMode, setDarkMode]
    
}

export default useDarkMode;
