import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage(false);

    useEffect(() => {
        if (darkModeOn === true) {
            console.log('Dark Mode On');
            document.body.classList.add('dark-mode')
        } else {
            console.log('Dark Mode Off')
            document.body.classList.remove('dark.mode')
        }
        // document.title = `Count is: ${count}`;
    }, [darkModeOn])
}

export default useDarkMode;