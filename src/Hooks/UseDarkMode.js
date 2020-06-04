import React, {useEffect} from 'react'
import useLocalStorage from './UseLocalStorage'



export const useDarkMode = (initialValue) => {
   const [theme, setTheme] = useLocalStorage('themes', false)

   const toggleMode = e => {
    e.preventDefault();
    setTheme(!theme);
  };

   return [theme, setTheme, toggleMode];
}