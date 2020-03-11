import {useLocalStorage} from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const[value, setValue] = useLocalStorage('dark-mode', false);

    useEffect(() => {
        if(useLocalStorage.value === true){
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [])
    return [value, setValue];
}