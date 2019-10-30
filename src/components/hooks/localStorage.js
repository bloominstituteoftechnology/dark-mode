import { useState } from 'react';

export const useLocalStorage = ( key, initialValue ) => {
   //set up initial state and pass to use state
    const [ storedValue, setStoredValue ] = useState(() => {
        //check local storage for value, parse what is stored or return initial value
        const i = window.localStorage.getItem( key )
        return i ? JSON.parse(i) : initialValue
    })

    //return a wrapped version of useState's setter that persists the new value to LS
    const setValue = value => {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem( key, JSON.stringify(value));
    }

    return [ storedValue, setValue ];

}
// should work almost exactly like useState - except any value that is controlled by this hook will be saved and persisted to localStorage