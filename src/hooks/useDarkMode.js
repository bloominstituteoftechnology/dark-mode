import { useLocalStorage } from "./useLocalStorage"; // Import useLocalStorage
import { useEffect } from "react";


export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('darkMode');
    const body = document.querySelector("body");

    useEffect(() => {
        values === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [values])


    return [values, setValues];
}
