import { useEffect } from 'react';
import useLocalStrage from './useLocalStorage';

const useDarkMode = (initalValue) => {
    const [DarkMode, setDarkMode] = useLocalStorage('dark-mode', initalValue);
  useEffect(() => {
      if (darkMode) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  }, [darkMode]);

return [DarkMode, setDarkMode];
}

export default useDarkMode;