import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue   ;
    });
  
    const setValue = (values) => {
      setStoredValue(values);
      window.localStorage.setItem(key, JSON.stringify(values));
    };
  
    return [storedValue, setValue];
  };
  