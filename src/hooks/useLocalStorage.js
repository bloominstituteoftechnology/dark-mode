import { useState } from 'react';


export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ? JSON.parse(window.localStorage.getItem(key)) : initialValue
    }); // useState end bracket

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }; // setValue end bracket

    return [storedValue, setValue];
} // function end bracket