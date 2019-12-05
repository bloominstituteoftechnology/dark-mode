import {useEffect} from 'react';
import useLocalStorage  from './useLocalStorage';

const useDarkMode = () =>{
    const [value, setValue] = useLocalStorage('darkmode');
    const body = document.querySelector('body');
    
    useEffect(() =>{
        if(value){
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode')
        }
    });

    return [value, setValue];
};

export default useDarkMode;