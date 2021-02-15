import React, { useState } from 'react';



const useLocalStorage = (key, initialValue) => {
  // set state storedValue
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  // NOTE:  Parsing is ALWAYS converting from JSON string to object.

  const setValue = value => {
    // save state
    setStoredValue(value);
    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setStoredValue];
}; // returns an array with a value and a setter in an array, exactly like the state hook

export default useLocalStorage;


// EXAMPLE of useLocalStorage hook from Module 3

// const useLocalStorage = (key, initialValue) => {

  // const [storedValue, setStoredValue] = useState(() => {
  //   const item = window.localStorage.getItem(key);
  //   return item ? JSON.parse(item) : initialValue;
  // });

//   const setValue = value => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };
//   return [storedValue, setValue];
// };