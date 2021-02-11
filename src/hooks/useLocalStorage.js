import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [value, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [value, setValue];
}

export default useLocalStorage;