import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const[storedValue, setStoredValue] = useState(() => {
        // set up state property
        //branching logic to implement localStorage functionality
    const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    })// using initial data because the data is not local
    
    const setValue = (value) =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}