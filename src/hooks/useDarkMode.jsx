import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValue => {
    const [displayMode, setDisplayMode] = useLocalStorage('Dark Mode', initialValue)

    useEffect(() => {
        displayMode ? document.body.classList.add('dark-mode') : document.body.classListlasses.remove('dark-mode')        
    }, [displayMode])

    return [displayMode, setDisplayMode]
}

export default useDarkMode