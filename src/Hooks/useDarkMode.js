import useLocalStorage from "./useLocalStorage"
import React, {useEffect} from "react"

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)


    useEffect(() => {
        if (darkMode === true){
            document.querySelector("body").classList.add("dark-mode")
        }else{
            document.querySelector("body").classList.remove("dark-mode")

        }
      });
    

    return [darkMode, setDarkMode]
  
}

export default useDarkMode