import { useState } from 'react';

const useLocalstorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}

export default useLocalstorage;