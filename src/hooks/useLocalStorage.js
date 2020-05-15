import React, {useState} from 'react';





function UseLocalStorage (key, initialValue) {


    const [storedValue, setStoredValue] = useState(() => {

        const item = window.localStorage.getItem(key);

        const setValue = value => {

            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));

        };
    
        return item ? JSON.parse(item) : initialValue;
    
    });

    return [storedValue];



}

export default UseLocalStorage;