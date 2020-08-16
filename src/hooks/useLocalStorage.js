import { useState } from 'react';

function useLocalStorage(key, initialValue){

    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key,JSON.stringify(initialValue));
            return initialValue;
        }
    });

     const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];

}
export default useLocalStorage;