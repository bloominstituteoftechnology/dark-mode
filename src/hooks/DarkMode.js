import { useLocalStorage } from "../hooks/LocalStorage";
import {useEffect} from "react";

export const useDarkMode = (key, makeValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, makeValue)

    useEffect(() => {
        const body = document.querySelector('body')
        if (darkMode === true) 

        { body.classList.add('dark-mode'); } 
        else { body.classList.remove('dark-mode')}

    }, [darkMode])
    
    return[darkMode, setDarkMode]
}

