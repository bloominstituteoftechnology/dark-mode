import { useEffect } from "react";
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('dark')
    //'dark' above is the key that is in local storge.

    useEffect(() => {
        if (darkMode === true)
            //if the key of 'dark' has a value of true, it'll run the classlist add below.
            document.querySelector('body').classList.add('dark-mode')
        else 
            //if the value is false, or isnt there, it will run this classlist remove from below.
            document.querySelector('body').classList.remove('dark-mode') }, [darkMode])

            // console.log(darkMode, setDarkMode);
            //log above returns undefined on page startup so darkmode is not added
            
        return [darkMode, setDarkMode]   
}

export default useDarkMode