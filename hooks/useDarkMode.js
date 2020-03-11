import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage("token", false);

    useEffect (() => {
        darkValue === true ? document.body.classList.add('dark-mode') : document.classList.remove('dark-mode');
    }, [darkValue])
    return [darkValue, setDarkValue]
}

export default useDarkMode