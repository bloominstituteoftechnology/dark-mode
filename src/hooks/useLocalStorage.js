import { useState } from 'react';

export const useLocalStorage =(key, initialState = '') => {

    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))){
            return JSON.parse(window.localStorage.getItem(key));
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(initialState));
            return initialState;
        }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};