import useLocalStorage from "./useLocalStorage";
import React { useEffect }

function useDarkMode() {
    useLocalStorage(key);
};

const useDarkMode

const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

setDarkMode= !darkMode;
document.body.classList.add("darkMode")
document.body.classList.remove("darkMode")

export useDarkMode;