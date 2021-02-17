import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return [darkMode, changeMode]
}