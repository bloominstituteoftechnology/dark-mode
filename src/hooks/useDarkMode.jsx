import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValue => {
    const [displayMode, setDisplayMode] = useLocalStorage('Dark Mode', initialValue)

    useEffect(() => {
        const bodyClasses = document.body.classList
        displayMode ? bodyClasses.add('dark-mode') : bodyClasses.remove('dark-mode')        
    }, [displayMode])

    return [displayMode, setDisplayMode]
}

export default useDarkMode