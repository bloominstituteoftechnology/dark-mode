import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initVal) =>{
const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initVal);
useEffect(()=> {
if (darkMode) {
document.body.classList.add('dark-mode')
}else {
    document.body.classList.remove('dark-mode')
}}, [darkMode]);

return [darkMode, setDarkMode];
};

export default useDarkMode;