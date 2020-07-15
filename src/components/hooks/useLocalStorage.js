import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // console.log('from LS', `${key} ${initialValue}`);
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : window.localStorage.setItem(key, initialValue);
    });
    console.log('from LS', storedValue);

    const SetValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
        console.log('from LS SetValue', value)
    }
    return [storedValue, SetValue];
}