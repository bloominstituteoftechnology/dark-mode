import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [ storedValue, setStoredValue ] = useState(() => {
        const storedValue = window.localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initialValue
    })
    
    function setValue(value) {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
    }
    return [ storedValue, setValue ]
}