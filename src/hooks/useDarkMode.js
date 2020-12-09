import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

	return [darkMode, setDarkMode];
};
