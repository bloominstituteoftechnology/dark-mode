import { useEffect } from 'react';
//import useLocalStorage hook so when user visits the site again LocalStorage will display their stored value in the browser
import useLocalStorage from './useLocalStorage.js'


//Utilizing use effect to run code asychronously only when user interaction causes a state change
const useDarkMode = (value) => {
	const [darkMode, setDarkMode] = useLocalStorage('dark-mode', value);
	useEffect(() => {
		if (darkMode) {
			//going to manipulate the dom and add classList of dark-mode to the document body
			//and if on we will remove the dark mode class from the body to turn off
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
		//useEffect has dependency array of darkMode and will run when that value changes
	}, [darkMode]);
	return [darkMode, setDarkMode];

};

export default useDarkMode;