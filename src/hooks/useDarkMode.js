import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (initialValues) => {

    const [darkMode, setDarkMode] = useLocalStorage("toggleDark", initialValues)


    const toggleMode = e => {
        console.log('Toggle mode', e.target);
        return darkMode ? "dark-mode App" : "App";

    }

    return [darkMode, setDarkMode, toggleMode]

}