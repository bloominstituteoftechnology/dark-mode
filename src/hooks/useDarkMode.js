import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage(false);

    useEffect(() => {
        if (darkModeOn === true) {
            console.log('Dark Mode On')
        } else
            {console.log('Dark Mode Off')}
        // document.title = `Count is: ${count}`;
    }, [darkModeOn])
}

export default useDarkMode;