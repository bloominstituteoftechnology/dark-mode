import React, { useState } from 'react';

//"key" should have a calue of "dark-mode"
//"initialValue" should have a value of boolean false

const useLocalStorage = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(() => {
        // console.log("this is localStorage: ", localStorage.getItem('dark-mode'))
        const boolFromLocal = localStorage.getItem(key)
        // console.log("this is the key:", key)
        // console.log(boolFromLocal)
        
        return boolFromLocal ? JSON.parse(boolFromLocal) : initialValue
    })

    //17:22 reference @param
    const setterFunction = param => {
        localStorage.setItem('dark-mode', JSON.stringify(param))
        setDarkMode(param)
    }
    return [darkMode, setterFunction] 
}

export default useLocalStorage

// setDarkMode("arbitraryArg") //goes up and resets dark mode 7:12 in 17:22 @param