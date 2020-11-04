import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
      });
  
    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        localStorage.setItem(key, JSON.stringify(value));
      };
  
    return [storedValue, setValue];
  };

export default useLocalStorage
  