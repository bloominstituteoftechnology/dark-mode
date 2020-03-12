import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
	//Declare local storage, key is label, initial value is the first value to loads
	const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue);

	const toggleDarkMode = e => {
		//prevent default behavior
		e.preventDefault();
		//switch between true/false on DarkMode state
		return darkMode ? setDarkMode(false) : setDarkMode(true);
	};

	//Add remove dark-mode class
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