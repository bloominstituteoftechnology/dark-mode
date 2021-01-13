import usedLocalStorage from './useLocalStorage'
import React from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () =>{
const [darkMode,setDarkMode] = useLocalStorage("DarkMode ON")
return [darkMode,setDarkMode];
}

export default useDarkMode;