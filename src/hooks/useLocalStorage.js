import React, { useState } from 'react'


export const useLocalStorage = (key, initialValues) => {

    const [storedValue, setStoredValue] = useState(() =>{
        
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(key): initialValues;

    });

    const setValue = value => {

        setStoredValue(value);

        window.localStorage.getItem(key, JSON.stringify(value));
        
    }




    return [storedValue];

    
}