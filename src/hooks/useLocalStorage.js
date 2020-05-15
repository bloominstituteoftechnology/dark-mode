import { useState } from "react";

//set up the state property
//if local data does not have that, else use initial data
//capture the values of the input
//update localStorage when needed
//Don't forget to parde data from localStorage, and stringify new data getting stored

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    //save state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
