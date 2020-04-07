import useLocalStorage from "./useLocalStorage"
import { useEffect } from "react"

function useDarkMode (key, initialValue) {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add('dark-mode');
        } else { 
            document.body.classList.add('dark-mode')}
    }, [ darkMode ]);


    return [ darkMode, setDarkMode ]
}

export default useDarkMode;