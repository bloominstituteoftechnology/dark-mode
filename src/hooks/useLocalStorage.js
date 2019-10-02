import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (item) {
            return JSON.parse(item);
        } else {
            return initialValue;
        }
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}

export default useLocalStorage; 