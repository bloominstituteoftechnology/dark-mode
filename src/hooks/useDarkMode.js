import {useLocalStorage} from './useLocalStorage';

export default function useDarkMode(value, initialValue){
    const [darkMode, setDarkMode] = useLocalStorage(value, initialValue);
    const toggleDarkMode = e =>{
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    document.body.classList.toggle('dark-mode', darkMode)
    return [darkMode, toggleDarkMode];
}