import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [isdarkMode, setisDarkMode] = useLocalStorage('isdarkMode')

 
    useEffect(() => {
        if(isdarkMode === 'true'){
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
        
        },[isdarkMode])
    
        return[isdarkMode, setisDarkMode]
    
    
};

export default useDarkMode;
