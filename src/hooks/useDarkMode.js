import { useEffect } from 'react';

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

export default useDarkMode;