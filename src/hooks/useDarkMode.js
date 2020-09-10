import { useLocalStorage } from "./useLocalStorage"
import { useEffect } from "react"

export const useDarkMode = (initialValues) =>{
    const [darkMode, setDarkMode] = useLocalStorage('dark mode', initialValues)
    const tired = document.querySelector('body');
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

      useEffect (() =>{
          console.log('dark mode on', darkMode)
          if(darkMode === true){
              return tired.classList.add('dark-mode')
          }
          return tired.classList.remove('dark-mode')
      })
    
    return[darkMode,toggleMode]
}
