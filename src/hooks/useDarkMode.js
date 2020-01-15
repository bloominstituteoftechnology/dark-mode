import { useLocalStorage } from './useLocalStorage';
// import { useState } from 'react';

export function useDarkMode() {

  const [value, setValue] = useLocalStorage('name');

  useEffect(() => {
    if (value === true) {
      const body = document.querySelector(`body`);
      body.classList.add(`dark-mode`)
    } else {
      body.classList.remove(`dark-mode`)
    }
  }, []);


}