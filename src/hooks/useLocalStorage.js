import {useState} from 'react';

export const useLocalStorage =  (key, initialValue) => {
    // console.log("useLocalStorage key ", key);
    // console.log("useLocalStorage initialValue ", initialValue);
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        // console.log("JSON.parse(item) ",JSON.parse(item));
        // console.log("item ",item);
        // console.log("(item ? JSON.parse(item) : initialValue) ", (item ? JSON.parse(item) : initialValue))
        return (item ? JSON.parse(item) : initialValue);
    });
    const setValue = value => {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};