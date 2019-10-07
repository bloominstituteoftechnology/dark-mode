import { useState } from "react";

export default const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);     
     //Check if the window.localStorage has a specific item (retrieved by key) in it, Return that item from local storage if it exists or the initialValue otherwise
    return item ? JSON.parse(item) : initialValue;
    //JSON.parse(item) parse a string and returned an object
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

