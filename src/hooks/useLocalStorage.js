import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const[storedValue, setStoredValue] = useState(() => {
        //branching logic to implement localStorage functionality
        
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    })
    
    const setValue = (value) =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}