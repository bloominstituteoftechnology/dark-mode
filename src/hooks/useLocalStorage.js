import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        // const item = window.localStorage.getItem(key);
        if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

        const setValue = value => {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value))
        };



    return [storedValue, setValue];
}
