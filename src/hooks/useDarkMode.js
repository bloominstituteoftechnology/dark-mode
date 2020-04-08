import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () =>{
    const [someValue, setSomeValue] = useLocalStorage("false");
        useEffect(() =>{
            if(someValue === "true"){
                document.body.classList.add("dark-mode");
            }
            else{
                document.body.classList.remove("dark-mode");
            }
        })
    return[someValue, setSomeValue];
}