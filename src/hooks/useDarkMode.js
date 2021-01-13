import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
	const [darkValue, setDarkValue] = useLocalStorage(initialValue);
	return [darkValue, setDarkValue];
}
