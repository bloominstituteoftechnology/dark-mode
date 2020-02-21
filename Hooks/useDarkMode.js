import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";


export const useDarkMode = () => {
    const [value, setValues] = useLocalStorage('darkMode');
    const body = document.querySelector("body");

    useEffect(() => {
        values === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [values])


    return [values, setValues];
}
