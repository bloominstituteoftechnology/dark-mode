import { useEffect } from 'react'
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    
    const [value, setValue] = useLocalStorage(key);
    
    const toggle = () => {
        setValue(!value)
    }

    useEffect(() => {
        if (value == true) {
            document.body.classList.add('dark-mode');
        }
        if (value == false) {
            document.body.classList.remove('dark-mode');
        }
    }, [value])
    
    return [value, toggle];
};