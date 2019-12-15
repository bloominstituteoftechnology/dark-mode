import useLocalStorage from "./useLocalStorage";


function useDarkMode() {
    useLocalStorage(key);
};

const [darkMode, setDarkMode] = useLocalStorage('your key here')

setDarkMode= !darkMode;
document.body.classList.add("darkMode")