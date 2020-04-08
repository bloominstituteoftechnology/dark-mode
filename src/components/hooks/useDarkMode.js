import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key)=>{
    const [darkmode, setDarkMode] = useLocalStorage(key);
    useEffect(()=>{
        if(darkmode === true){
        document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')  
        }
    }, [darkmode])
    return [darkmode, setDarkMode];

}