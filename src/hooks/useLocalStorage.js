import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => { 
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue
  });

  const setNewStoredVal = newStoredVal => {
    setStoredValue(newStoredVal)
    window.localStorage.setItem(key, JSON.stringify(newStoredVal))
  }

  console.log(`this is uLS:`, storedValue)
  return [storedValue, setNewStoredVal];

};

export default useLocalStorage
