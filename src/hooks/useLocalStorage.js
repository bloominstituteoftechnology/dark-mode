import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    console.log('key :', key, 'initialValue :', initialValue);
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            // return JSON.parse(window.localStorage.getItem(key))
            console.log(window.localStorage.key);
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};