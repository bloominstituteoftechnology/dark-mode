import react, {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)
    let App = document.getElementsByClassName("App")
    useEffect(() => {
        if (value === true) {
            App[0].classList.add('dark-mode')
        } else {
            App[0].classList.remove('dark-mode')
        }
    }, [value])

    return [value, setValue]
}