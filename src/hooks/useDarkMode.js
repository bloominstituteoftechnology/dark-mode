import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

useEffect(() => {
      if (storedValue === true) {
        return document.body = dark-mode;
      }
}, [])

export const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
}