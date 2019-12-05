import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);
    useEffect(() => {
        if (darkMode === true){
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    })

    return [darkMode, setDarkMode]
}