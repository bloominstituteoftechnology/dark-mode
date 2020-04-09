import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key){
    const [darkMode, setDarkMode] = useLocalStorage(key);
    useEffect(()=>{
        if (darkMode === true){
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        };
    }, [darkMode])

    return [darkMode, setDarkMode]
}

