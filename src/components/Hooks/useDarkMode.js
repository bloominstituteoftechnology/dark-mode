import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'



export const useDarkMode = (initalValue) => {

    const [ darkMode, setDarkMode ] = useLocalStorage( 'darkMode', initalValue)

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('dark-mode') 
        : document.querySelector('body').classList.remove('dark-mode')
    }, [darkMode])


    return [ darkMode, setDarkMode ]

}

