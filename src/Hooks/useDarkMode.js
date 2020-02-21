import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";


export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode');
    const body = document.querySelector("body");

    useEffect(() => {
        value === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [value])


    return [value, setValue];
}
