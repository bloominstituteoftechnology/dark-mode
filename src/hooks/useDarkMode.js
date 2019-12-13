import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, value) => {
  const [toggle, setToggle] = useLocalStorage(key, value)

  useEffect(() => {
    if(toggle === true){
      document.querySelector('body').classList.add('dark-mode')
  } else {
      document.querySelector('body').classList.remove('dark-mode')
  }
}, [toggle]);

  return [toggle, setToggle];
}
export default useDarkMode;