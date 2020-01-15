import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage('darkMode');
    useEffect(() => {
        
        // if (values === true) {
        //     document.body.classList.add('dark-mode')
        // } else {
        //     document.body.classList.remove('dark-mode')
        // }

        values ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

    }, [values]);

    return [values, setValues];
};

export default useDarkMode;
