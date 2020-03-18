import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
  const [darkMod, setDarkMod] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    const body = document.querySelector('body');

    darkMod
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [darkMod]);
  return [darkMod, setDarkMod];
};
export default useDarkMode;
