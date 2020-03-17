import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export function useDarkMode() {
    const [ storedValue, setValue ] = useLocalStorage("darkMode", false);

    useEffect(() => {
        if (storedValue) {
            document.getElementsByTagName("body")[0].classList.add("dark-mode")
        } else {
            document.getElementsByTagName("body")[0].classList.remove("dark-mode")
        }
    }, [storedValue])

    return [ storedValue, setValue ];
}