import React from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialState) => {
    const [darkMode, setDarkmode] = useLocalStorage(initialState)
    return [darkMode, setDarkmode]
}

export default useDarkMode;
