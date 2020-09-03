import useLocalStorage from './useLocalStorage'
import { useEffect } from "react";

export default function useDarkMode(value) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

    useEffect(() => {
        console.log(darkMode)
        if (darkMode === true){
            return document.body.classList.add('dark-mode'); 
        }else
       return document.body.classList.remove('dark-mode')
       
    }, [darkMode]);
    
    return[ darkMode, setDarkMode ]
}