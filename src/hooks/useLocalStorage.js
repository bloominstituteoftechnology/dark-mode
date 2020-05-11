import {useState} from 'react';

export const useLocalStorage =  (key, initialValue) => {
    console.log("In the useLocalStorage hook");
    const item = window.localStorage.getitem(key);
    const [storedValue, setStoredValue] = useState((item) => {
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};