import {useState} from "react"
import {useLocalStorage} from "./useLocalStorage"


export const useDarkMode =(key,initialValue)=>{
    const [values,setValues] = useLocalStorage(key,initialValue)



    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.initialValue);
      };
return [ toggleMode]
}




