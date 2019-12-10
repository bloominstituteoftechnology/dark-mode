import React, { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChanges = (newValue) => {
    setValue(newValue);
  };
    return [value, setValue, handleChanges];
};

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() =>{
        const item= window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
      
        const setValue = value => {
         setStoredValue(value);
         window.localStorage.setItem(key, JSON.stringify(value));
      };
         return [storedValue, setValue];
     };

