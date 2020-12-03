import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react'

const useDarkMode = (toggleDark) =>{
    const [value, setValue] = useLocalStorage(toggleDark)

    useEffect(() =>{
        if (value) {
            window.document.body.classList.add("dark-mode")
        } else {
            window.document.body.classList.remove("dark-mode")
        }
    }, [value])

    return [value, setValue]
}

export default useDarkMode