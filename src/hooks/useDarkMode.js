import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(key, initialValue, cb) {
	const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

	//to make the mode persistant and activate only when dark mode is in
	React.useEffect(() => {
		darkMode
			? document.querySelector("body").classList.add("dark-mode")
			: document.querySelector("body").classList.remove("dark-mode");
	});

	return [darkMode, setDarkMode];

	}
