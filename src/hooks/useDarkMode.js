import React from 'react';
import useLocalStorage from './useLocalStorage'


const useDarkMode = (key) => {

  const [storedValue, setValue]= useLocalStorage(key);

  return [storedValue, setValue];
};

export default useDarkMode;