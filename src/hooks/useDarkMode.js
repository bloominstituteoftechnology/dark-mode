import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

  const [darkMode, setDarkMode] = useLocalStorage('darkModeSet');

  useEffect(() => {
    if (darkMode) {
      return document.body('dark-mode');
    } else {
      return document.body(!'dark-mode');
    }
}, [])

  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
}

export default useDarkMode;