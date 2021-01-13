import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    //1. When we create our state, look inside localStorage to see if it already exists.
    //2. If it does exist, put that saved value into state. If not put in initialValue.
    //3. When we modify our state, save that change to localStorage as well.

    const [storedValue, setStoredValue] = useState(()=>{
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }

        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

export default useLocalStorage;