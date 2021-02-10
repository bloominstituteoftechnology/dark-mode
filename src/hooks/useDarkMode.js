import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    return [darkMode, setDarkMode]
}

export default useDarkMode;