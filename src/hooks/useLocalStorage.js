import {useState} from "react";

const useLocalStorage = (key, initValue) => {
	const [storedValue, setStoredValue] = useState( () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initValue;
		} catch (err) {
			console.log(err);
			return initValue;
		}
	});
	
	const setValue = value => {
		try {
			const valueToStore = 
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorage;