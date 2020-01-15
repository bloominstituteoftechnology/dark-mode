import {useLocalStorage} from "./useLocalStorage"
import {useEffect} from 'react'
const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(darkMode, false);
    useEffect(() => {
        if(darkMode == false) { 
            setDarkMode(true)
        } else if(darkMode == true) {
            setDarkMode(false)
        }
        }, [darkMode]);

        return [darkMode, setDarkMode]
}