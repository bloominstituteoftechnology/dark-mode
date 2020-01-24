import { useEffect } from 'react';
<<<<<<< HEAD

import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('isDark', false);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('dark-mode');
      console.log('this!')
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
} 
=======
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
>>>>>>> 932ecd74f8f44ad618702a5321a51fa91b3af563

export default useDarkMode;