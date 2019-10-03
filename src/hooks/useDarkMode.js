import  { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';


export default function useDarkMode(key, initialValue){
    // useLocalStorage('value');
    const [value, setValue] = useLocalStorage(key, initialValue);


    useEffect(()=>{
        if(value===true){
            
                document.querySelector('body').classList.add('dark-mode')
            
        }
        else{
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[value]);


    return [value,setValue];
}