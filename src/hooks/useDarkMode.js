import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

export const useDarkMode = (key) => {
    const [someValue, setSomevalue] = useLocalStorage('darkmode')
    useEffect(() => {
        if(someValue === true){
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }
    }, [someValue])
    return[someValue, setSomevalue]
}