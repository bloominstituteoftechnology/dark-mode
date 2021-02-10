import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
  const [someValue, setSomeValue] = useLocalStorage(key)  

  return [someValue, setSomeValue]
}

export default useDarkMode