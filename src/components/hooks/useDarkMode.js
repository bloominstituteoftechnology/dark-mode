import {useLocalStorage} from './useLocalStorage'
import { useEffect } from 'react'

export function useDarkMode(key) {

    const [ darkMode, setdarkMode] = useLocalStorage(key)

    useEffect(() => {
       if(darkMode) {
           window.document.body.className('dark-mode');
       } else {
           window.document.body.className('App');
       }
    },[])
}

// export default useDarkMode;