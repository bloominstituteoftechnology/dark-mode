import { useState } from 'react';

export const useLocalStorage = (key, initialState = '') => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialState;
    });
    
    
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
        
    return [storedValue,setValue];
};

