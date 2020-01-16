import { useState } from 'react';
// set up state property
// capture the values
// if no data in localStorage, use initial data
// if there is data in localStorage, use that
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = newValue => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue];
};
