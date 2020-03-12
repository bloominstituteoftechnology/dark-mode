import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const origValue = localStorage.getItem(key);
  console.log("ORIG", origValue);
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = value => {
    localStorage.setItem(key, Boolean(value));
    setStoredValue(Boolean(value));
  };

  return [storedValue, setValue];
};
