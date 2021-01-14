// import { useState } from 'react';
import useLocalStorage from "./useLocalStorage";

const useDarkMode= (initialValues)=> {
    const [darkModeValues, setDarkModeValues] = useLocalStorage("darkModemode", initialValues);
  
    const handleChanges = e => {  
      setDarkModeValues({
        ...darkModeValues,
        [e.target.value]: e.target.value
      });
    };
  
    const prefersDarkmode = e => {
      e.preventDefault();
      setDarkModeValues(initialValues);
    };
  
    return([darkModeValues, handleChanges, prefersDarkmode]);
  };

export default useDarkMode;