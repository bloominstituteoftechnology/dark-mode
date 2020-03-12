import {useState} from "react";

function useLocalStorage (key, init) {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
    	//
        return item ? JSON.parse(item) : init;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setStoredValue]
};

export default useLocalStorage;