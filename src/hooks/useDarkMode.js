import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

const usePrefersDarkMode = () => {
	return useMedia(['(prefers-color-scheme: dark)'], [true], false);
};

const useDarkMode = (bool) => {
	const prefersDark = usePrefersDarkMode();
	const boolToSet = typeof bool !== "undefined" ? bool : prefersDark;
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", boolToSet);
	return [darkMode, setDarkMode];
};


export default useDarkMode;