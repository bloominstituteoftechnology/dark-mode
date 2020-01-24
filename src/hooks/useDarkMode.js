import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);

  useEffect(() => {
    if (useLocalStorage === true) {
      
    }
  }, [])
} 

export default useDarkMode;