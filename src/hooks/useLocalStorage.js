import React, { useState} from "react";

/*1. Create a locaStorage function to take key and initialValue to:
  - Use initial value if the item value (matching key) doesn't exist
  - Use item value if the there is any in Local Storage
*/

const useLocalStorage = (key) => {

  const [storedValue, setStoredValue] = useState("");
  // () => {
  //   const item = window.localStorage.getItem(key);
  //   return item ? JSON.parse(item) : initialValue;
  // }

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
};


export default useLocalStorage;
