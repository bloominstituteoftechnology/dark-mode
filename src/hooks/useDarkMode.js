import React, {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export  function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false)


    useEffect(() => {
        
        const classBody = document.querySelector('body')
        
        if(darkMode === true){
            classBody.classList.add('dark-mode')
        }else{
          classBody.classList.remove('dark-mode')
        };
    }, [darkMode, useLocalStorage])

    return 

}

