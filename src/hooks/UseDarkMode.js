import {useEffect} from 'react';
import useLocalStorage from './UseLocalStorage';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() =>  {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  },[darkMode]);

  return [darkMode, setDarkMode];
}
