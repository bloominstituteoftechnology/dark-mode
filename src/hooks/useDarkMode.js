import {useState} from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage("darkMode", initialValue);

    return [value, setValue]

}

export default useDarkMode