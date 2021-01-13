import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
	const [darkValue, setDarkValue] = useLocalStorage(
		"Theme Preference: Dark Mode",
		initialValue
	);
	return [darkValue, setDarkValue];
}
