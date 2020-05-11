import {useState} from 'react';

export const useLocalStorage =  (key, initialValue) => {
    console.log("In the useLocalStorage hook");
    
    const [storedValue, setStoredValue] = useState((item) => {
        item = window.localStorage.getItem(key);
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