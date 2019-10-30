import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(false)

    useEffect(() => {
        if(isDarkMode === true) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode]
}

export default useDarkMode;