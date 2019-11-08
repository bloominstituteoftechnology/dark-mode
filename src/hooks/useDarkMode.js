import { useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage.js';

export const UseDarkMode = (key, initialValue) => {

  useEffect(() => {
    if (storedValue === true) {
      return document.body = dark-mode;
    } else {
      return document.body = app;
    }
}, [])

  const [value, setValue] = UseLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
}