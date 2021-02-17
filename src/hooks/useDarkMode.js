import React from 'react';
import useLocalStorage from './useLocalStorage'


const useDarkMode = (key, value) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, value);
  return [darkMode, setDarkMode];
};

export default useDarkMode;