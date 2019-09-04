import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initalValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initalValue);
  useEffect(() => {
      if (darkMode) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  }, [darkMode]);

return [darkMode, setDarkMode];
}

export default useDarkMode;