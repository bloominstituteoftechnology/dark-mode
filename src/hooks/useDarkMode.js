import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('Dark Mode Status');
    return [darkMode, setDarkMode]
}

export default useDarkMode;