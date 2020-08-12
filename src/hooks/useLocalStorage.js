import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
    
      return [storedValue, setValue ];

}