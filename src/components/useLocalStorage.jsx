import React, { useState } from 'react';

//"key" should have a calue of "dark-mode"
//"initialValue" should have a value of boolean false

const useLocalStorage = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(() => {
        console.log("this is localStorage: ", localStorage.getItem('dark-mode'))
        const local = localStorage.getItem(key)
        console.log(local)
        return local
    })
}

export default useLocalStorage