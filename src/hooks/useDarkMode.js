import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues, key) => {
    const [storedValue, setStoredValue] = useLocalStorage(initialValues, key);

    useEffect(() => {
        const body = document.querySelector('body');

        if(storedValue === true) {
            console.log("darkmode on")
            body.classList.add('dark-mode')
        }
        else {
            console.log ("darkmode off")
            body.classList.remove('dark-mode');
        }
    }, [storedValue]);

    return [storedValue,setStoredValue];
}