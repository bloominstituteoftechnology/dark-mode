import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

 const useDarkMode = (key) => {
    const [mode, setMode] = useLocalStorage(key)

    useEffect(() => {
        return mode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    },[mode]);

    return [mode, setMode]
    }
export default useDarkMode