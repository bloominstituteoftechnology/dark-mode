import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const item = JSON.parse(window.localStorage.getItem(key));

  const [storedValue, setStoredValue] = useState(item || initialValue);

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

