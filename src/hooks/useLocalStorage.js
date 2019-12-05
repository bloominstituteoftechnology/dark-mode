import {useState} from 'react';

const useLocalStorage = (key, initialValue) =>{
    const [item, setItem] = useState(() =>{
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : initialValue;
    });

    const setValue = value =>{
        setItem(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [item, setValue];
}

export default useLocalStorage;