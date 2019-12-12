import {useEffect} from "react"
import {useLocalStorage} from "./useLocalStorage"



export const useDarkMode = initialValue => {
    // set the state of the darkMode 
    const [darkMode , setDarkMode] = useLocalStorage("dark" , initialValue)

    // change the state of the darkMode
    useEffect(() => {
        // select the whole body to change its background-color
        const body = document.querySelector("body")
         darkMode ? body.classList.add("dark-mode"): body.classList.remove("dark-mode")
    } , [darkMode])

    return [darkMode, setDarkMode]
}