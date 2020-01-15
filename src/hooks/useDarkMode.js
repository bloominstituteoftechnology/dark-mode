import {useLocalStorage} from "./useLocalStorage"
import {useEffect} from 'react'
export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);
    useEffect(() => {
        if(darkMode === true) { 
            document.body.classList.add("dark-mode");
        } else if(darkMode === false) {
            document.body.classList.remove("dark-mode")
        }
        }, [darkMode]);

        return [darkMode, setDarkMode]
}