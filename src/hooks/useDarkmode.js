import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [toggleDarkMode, settoggleDarkMode] = useLocalStorage(false);

    useEffect(()=> {
        settoggleDarkMode ? document.body.classList.add('dark-mode') : document.bodyclassList.remove('dark-mode')
    }, [toggleDarkMode])

    return[toggleDarkMode, settoggleDarkMode]
    
};

export default useDarkMode;
