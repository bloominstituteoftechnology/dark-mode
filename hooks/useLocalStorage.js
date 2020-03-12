import React, {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {;
    return item === true ? JSON.parse(item) : initialValue;
    });


const setValue = value => {
    setStoredValue(value);
    window.localStorage.setIten(key, JSON.stringify(value));
};
return [storedValue, setValue]
}

export default useLocalStorage