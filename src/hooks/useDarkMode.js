import useLocalStorage from "./useLocalStorage";
import {useEffect} from "react";


const useDarkMode = (key, initialValue)=>{
 const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
 
 
 useEffect(()=>{
    const body = document.querySelector('body');
        if (darkMode === true) {
            body.classList.add('dark-mode');
        } else{
            body.classList.remove('dark-mode')
        }
     
    // return prevMode
}, [darkMode])

return[darkMode, setDarkMode];
}


export default useDarkMode;