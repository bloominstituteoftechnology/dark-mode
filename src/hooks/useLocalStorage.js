import { useState } from 'react';

export const useLocalStorage = (key, intialState = '') => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : intialValue;
    });
    return [storedValue];
};

const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
};
    return [setValue];