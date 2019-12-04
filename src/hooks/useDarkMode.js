import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);
  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark-mode');
    }
    else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [dark]);
  return [dark, setDark];
}

export default useDarkMode;