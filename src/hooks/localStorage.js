import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } 
    window.localStorage.setItem(key, JSON.parse(initialValue));
    return initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
};

export default useLocalStorage