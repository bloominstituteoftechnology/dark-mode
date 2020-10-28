import useLocalStorage from "./useLocalStorage";

const useDarkMode = (bool) => {
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", bool);
	return [darkMode, setDarkMode];
};

export default useDarkMode;