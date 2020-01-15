import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {
  const body = document.querySelector(`body`);
  // console.log(body)

  const [value, setValue] = useLocalStorage('name');

  useEffect(() => {
    if (value === true) {
      return body.classList.add(`dark-mode`)
    } else {
      return body.classList.remove(`dark-mode`)
    }
  }, [setValue]);

  return [value, setValue];
}