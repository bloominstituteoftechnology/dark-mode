import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage("darkMode", false)
    
    useEffect(() => {

      if (values === true)
        return document.body.classList.add("dark-mode")
        return document.body.classList.remove("dark-mode")
      },[values]

    );


 
 
  return [values, setValues];
};
