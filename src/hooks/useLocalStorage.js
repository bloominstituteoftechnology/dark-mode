import {useState} from "react";

const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(()=>{
    //     if (window.localStorage.getItem(key)) {
    //         return JSON.parse(window.localStorage.getItem(key));
    //     }
    //          window.localStorage.setItem(key, JSON.stringify(initialValue));
    //          return initialValue;
    //    });
    const mode = window.localStorage.getItem(key);
    return mode ? JSON.parse(mode) : initialValue;});
    
    const setValue = value =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];

}
export default useLocalStorage;