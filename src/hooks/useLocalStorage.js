import {useState, useEffect} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedvalue, setStoredValue] = useState(() =>{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedvalue, setValue];
};

export default useLocalStorage;