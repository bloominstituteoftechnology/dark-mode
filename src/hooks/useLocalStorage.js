import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  function getInitialValue() {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  const [storedValue, setStoredValue] = useState(getInitialValue());

  const setValue = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue];
};

/**
 * // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
const [storedValue, setStoredValue] = useState(() => {
  // Get from local storage by key
  const item = window.localStorage.getItem(key);
  // Parse and return stored json or, if undefined, return initialValue
  return item ? JSON.parse(item) : initialValue;
});
import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [storedValue];
};
 */