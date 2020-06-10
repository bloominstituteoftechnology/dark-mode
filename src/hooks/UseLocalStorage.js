import { useState } from "react";

function useLocalStorage(key, initialValue) {  //Sets parameters as key & initialValue
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key); //Get from localStorage by key
    return item ? JSON.parse(item) : initialValue; // Parse and return stored json or, if undefined, return initialValue

  });
  const setValue = value => {
    setStoredValue(value);  //save state
    window.localStorage.setItem(key, JSON.stringify(value));
  };  //save to local storage
  return [storedValue, setValue];
};

export default useLocalStorage;
