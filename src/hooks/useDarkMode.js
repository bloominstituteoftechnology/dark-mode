import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'


const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('key1')
   
   
    useEffect(() => {
        
        return mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
      }, [mode]);

      return [mode, setMode]
}

export default useDarkMode