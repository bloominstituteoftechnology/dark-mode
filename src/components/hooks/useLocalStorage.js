import { useState } from 'react';


const useLocalStorage = (key, value) => {

    const [storedValue, setStoredValue] = useState(() => {
        const keyItem = window.localStorage.getItem(key);
        return keyItem ? JSON.parse(keyItem) : value;
    });


    const setValue = value => {

        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];

}





export default useLocalStorage