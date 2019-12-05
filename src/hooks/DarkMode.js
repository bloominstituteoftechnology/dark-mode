import React, { useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage"

 const useDarkMode = (key, initialValues) => {
    const [darkmode, setDarkMode] = useLocalStorage(key, initialValues);
    

    useEffect(()=> {

        const checkValue = () => {
            (darkmode === true? document.querySelector("body").classList.add('dark-mode') : document.querySelector("body").classList.remove('dark-mode'))
        }
        return checkValue
    }, [darkmode])

        
    return [darkmode, setDarkMode]
}
export default useDarkMode;

