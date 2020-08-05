import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("ooga", true);
    return [darkMode, setDarkMode]
}