import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react'

export const useDarkMode = (initialVaule) => {

    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialVaule);

    useEffect(()=>{
        const body = document.querySelector('.App')
        if(darkMode === true ){
            body.classList.add('dark-mode')
        }else {
            body.classList.remove('dark-mode')
        }
        
    }, [darkMode])

    return [darkMode, setDarkMode]
}