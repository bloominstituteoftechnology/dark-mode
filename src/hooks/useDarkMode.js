import {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [mode] = useLocalStorage(key, initialValue)
    
    useEffect(()=> {
        mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    },[mode])

    return [mode]

}
