import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    //key and initialvalue are bananna words
    const [storedValue, setStoredValue] = useState(() => {
        
        const item = localStorage.getItem(key);
            //creating or setting item to the local storage value of key
        return item ? JSON.parse(item) : initialValue;

    });

    const setValue = (value) => {
        localStorage.setItem(key,
            
            //setting item of key

            JSON.stringify

            //local storage can only take a string, so this is transfering it to a string

            (value));

            // console.log('key' , key);
            // returns dark from useDarkMode.js line 6

        // console.log('value', value);
        //log above returns true or false

        setStoredValue(value); 
    }
        // console.log(storedValue);
        //log above returns false, as the darkmode on startup isnt turned on
    return [storedValue, setValue];
}

export default useLocalStorage

