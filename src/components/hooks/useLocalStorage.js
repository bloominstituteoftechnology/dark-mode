import { useState } from 'react';

export const useLocalStorage = (key, initialValue)=> {
    //1. create our state values
    //2. if we already have a value set for localStorage, make our value that.
    //3. if we don't have a value set for localStorage, make our value initiaiValue.
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.setItem(key, initialValue);
        return item ? JSON.parse(item) : initialValue;
    });

    //4. set our new value into state
    //5. set out new value into localStorage
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}
