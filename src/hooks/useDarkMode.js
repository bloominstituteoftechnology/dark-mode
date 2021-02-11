import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);
    return [darkMode, setDarkMode];
};