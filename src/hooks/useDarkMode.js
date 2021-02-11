import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('Dark Mode Status');
    return [darkMode, setDarkMode]
}