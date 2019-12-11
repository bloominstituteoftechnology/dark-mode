import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChanges = (newValue) => {
    setValue(newValue);
  };
    return [value, setValue, handleChanges];
};

export default function  useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
      
        const setNewValue = newValue => {
         setStoredValue(newValue);
         window.localStorage.setItem(key, JSON.stringify(newValue));
      };
         return [storedValue, setNewValue];
     };

