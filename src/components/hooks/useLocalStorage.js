import React, { useState } from 'react';


const useLocalStorage = (key, initialValue) => {

    //Function to check local storage for a value associated with key and 
    //return key value if it exsists, otherwise return initialValue
    const getLocalStorage = () => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }

    //Create a state and its initial value is set from the result of getLocalStorage 
    const [storedValue, setStoredValue] = useState(getLocalStorage());

    //Function that updates state's value to 'value'
    //And sets key and 'value' into localStorage
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }


    return [storedValue, setValue];
}




export default useLocalStorage;