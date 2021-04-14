// on the way into localStorage, JSON.stringify (object -> string)
// on the way out of localStorage, JSON.parse (string -> object)

// This hook will compose useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage
import { useState } from 'react'

export const useLocalStorage = (key, modeValue) => {
    const [value, setStateValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        else {
            localStorage.setItem(key, JSON.stringify(modeValue))
            return modeValue
        }
    });
    const setValue = (newValue) => {
        setStateValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value , setValue];
}