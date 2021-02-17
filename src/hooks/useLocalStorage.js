import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {


        // With this function we want to... 
        //1. set the state of stored value to a function that... 
        const [storedValue, setStoredValue] = useState(() => {
            //2. create an item that is getting the local storage by key
            const item = localStorage.getItem(key);
            //3. Parse and return stored JSON or if undefined, will return initial value
            return item ? JSON.parse(item) : initialValue;
        })

        //with this function we want to.... 
        const setValue = value => {
            //1. save state
            setStoredValue(value);
            //2. Save to localStorage
            localStorage.setItem(key, JSON.stringify(value));

        }
        // This storeValue will be returned on function call 
        console.log(setValue)
        return [storedValue, setStoredValue]

};

export default useLocalStorage;