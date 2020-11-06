import { useLocalStorage } from "./useLocalStorage"
import { useEffect } from "react"

export const useDarkMode = (initialValues) =>{
    const [darkMode, setDarkMode] = useLocalStorage('dark mode', initialValues)
    const darkBody = document.querySelector('body');
    //variable that will be used for selecting the body.. that will later be passed through use effect to manipulate dark mode 
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };//form button used to toggle the dark mode button on and off

      useEffect (() =>{
          console.log('dark mode on', darkMode)
          if(darkMode === true){
              return darkBody.classList.add('dark-mode')
          }
          return darkBody.classList.remove('dark-mode')
      },[darkMode])//use Effect function is being used to determine if the button is toggled on or off 
    
    return[darkMode,toggle]
}
