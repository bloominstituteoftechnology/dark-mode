import { useState } from 'react'

const useLocalStorage = ( key, initialValue ) => {
    const [storedValue,setStoredValue] = useState(() => {
        const item = localStorage.getItem(key)

        return item ? JSON.parse(item) : initialValue
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}

export default useLocalStorage;