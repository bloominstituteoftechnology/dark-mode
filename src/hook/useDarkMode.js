import { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key) {
  const [someValue, setSomeValue] = useLocalStorage(key);

  useEffect(() => {
    const darkMode = document.querySelector("body");
    if(someValue === true){
      darkMode.classList.add('dark-mode')
    } else {
      darkMode.classList.remove('dark-mode')
    }
  }, [someValue])

  return [someValue, setSomeValue]
}