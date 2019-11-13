import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  let bodyEl = document.querySelector('body');
  useEffect(() => {
    darkMode === true
      ? bodyEl.classList.add('dark-mode')
      : bodyEl.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
