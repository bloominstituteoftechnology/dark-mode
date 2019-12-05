import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues)

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values);
    }

    useEffect(()=> {
        const grabApp = document.querySelector(".App")
        if(values){
            grabApp.classList.add('dark-mode')
        } else {
            grabApp.classList.remove('dark-mode')
        }
    },[values])

    return [values, toggleMode]
}

export default useDarkMode; 