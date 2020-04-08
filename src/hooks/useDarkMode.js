import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key) =>{
    const [someValue, setSomeValue] = useLocalStorage(key);
        useEffect(() =>{
            if(someValue === true){
                document.body.classList.add("dark-mode");
                console.log("Dark-Mode activated");
            }
            else{
                document.body.classList.remove("dark-mode");
                console.log("Dark-Mode deactivated")
            }
        },[someValue])
    return[someValue, setSomeValue];
}