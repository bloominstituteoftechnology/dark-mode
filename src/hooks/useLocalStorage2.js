import { useState } from 'react';
const useLocalStorage = (key, initialValue) => {
    // key, intialValue are the destructed props we are using for the example
    const[storedValue, setStoredName] = useState(() => {
      const item = window.localStorage.getItem(key);
      // this statement will check to see if JSON is able to check whether or not a value is placed in initialValue, which is passed to the function
      return item ? JSON.parse(item) : initialValue;
    });
    const setName = value => {
        setStoredName(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setName];
};
export default useLocalStorage;