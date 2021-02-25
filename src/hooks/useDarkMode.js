import useLocalStorage from './useLocalStorage'
import {useState} from 'react'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage("modeStatus", initialValue)
    const [darkMode, setDarkMode] = useState(false);


    return [someValue, setSomeValue, darkMode, setDarkMode]
}

export default useDarkMode;