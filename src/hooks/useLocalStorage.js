import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    //set the state of local storage to storedValue
    const [storedValue, setStoredValue] = useState(() => {
        //Get From local storage by key
        const item = window.localStorage.getItem(key);

        //parse and return stored json or, if undefined, return the initial value
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        //saves the state
        setStoredValue(value);
        //saves to local storage with key and the value. saves as a string
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}