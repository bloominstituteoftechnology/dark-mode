import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

export const useDarkMode = (key, initialValue) => {

  useEffect(() => {
    if (storedValue === true) {
      return document.body = dark-mode;
    } else {
      return document.body = app;
    }
}, [])

  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
}