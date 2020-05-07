import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
    
    const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue);

	const toggleDarkMode = e => {
		e.preventDefault();
		return darkMode ? setDarkMode(false) : setDarkMode(true);
	};

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [ darkMode ]);

	return [ darkMode, setDarkMode, toggleDarkMode ];
};

export default useDarkMode