import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
	const [value, setValue] = useLocalStorage("darkMode", initialValue);
	console.log("darkMode", initialValue);

	return [value, setValue];
};

export default useDarkMode;
