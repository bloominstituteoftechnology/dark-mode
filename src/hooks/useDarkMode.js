import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (noticeDarkModeChange) => {
    const [darkMode, setDarkMode] = useLocalStorage('visualMode', 'standard');
    
    useEffect(() => {
      if(darkMode === 'dark'){
          document.body.classList.add('dark-mode')
      }else {
          document.body.classList.remove('dark-mode')            
      }
    }, [darkMode]);

    // useEffect(() => {
    //     if (typeof(noticeDarkModeChange) === 'function') noticeDarkModeChange(darkMode);
    //     console.log('useDarkMode is noticing a change ' + darkMode);
    //     console.log('useDarkMode typeof(noticeDarkModeChange) ' + typeof(noticeDarkModeChange));
    // }, [darkMode]);

    return [darkMode, setDarkMode];
}