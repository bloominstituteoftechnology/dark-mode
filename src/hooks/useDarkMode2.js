import React, { useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage"

 const useDarkMode = (key, initialValues) => {
    const [darkmode, setDarkMode] = useLocalStorage(key, initialValues);


    useEffect(()=> {

        const checkValue = () => {
            if (darkmode === true ){
                document.getElementById("body").classList.add('dark-mode'); 
            }else{
                document.getElementById("body").classList.add('')
            }
        }
        return checkValue
    }, [darkmode])

        return values
    
}
export default useDarkMode;
