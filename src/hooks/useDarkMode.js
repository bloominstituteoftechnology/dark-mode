import useLocalStorage from "./useLocalStorage";



export default function useDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage("darkModeOn");
    return [darkMode, setDarkMode];
}