import React, { useState } from "react";


function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
     JSON.parse(window.localStorage.getItem(key))}
     window.localStorage.setItem(key, JSON.stringify(initialValue))
     return initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setStoredValue];
}
export default useLocalStorage;