import React, { useState } from 'react'
import useDarkMode from './UseDarkMode'


// Build function

// export const useLocalStorage = (key, initialValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//       if (window.localStorage.getItem(key)) {
//         return JSON.parse(window.localStorage.getItem(key));
//       }
//       window.localStorage.setItem(key, JSON.stringify(initialValue));
//       return initialValue;
//     });
//     const setValue = value => {
//       setStoredValue(value);
//       window.localStorage.setItem(key, JSON.stringify(value));
//     };
//     return [storedValue, setValue];
//   };
export const  useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

    
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
    // return item === null ? initialValue : JSON.parse(item)
});
    const setValue = (value) => {
        setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value));
        };
   

    return [storedValue, setValue];

}
// export default useLocalStorage;
