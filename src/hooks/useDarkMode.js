import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('darkMode', value);

    useEffect(() => {
        if (darkModeOn === true) {
            console.log('Dark Mode On');
            document.body.classList.add('dark-mode')
        } else {
            console.log('Dark Mode Off')
            document.body.classList.remove('dark-mode')
        }
    }, [darkModeOn])

    return [darkModeOn, setDarkModeOn];
}

export default useDarkMode;