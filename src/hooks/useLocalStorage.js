import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    })

    const setValue = newValue => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [storedValue, setValue];

}