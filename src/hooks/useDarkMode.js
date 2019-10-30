import { useLocalStorage } from './useLocalStorage'
import React, { useEffect } from 'react'
import { brotliDecompressSync } from 'zlib';



export const useDarkMode = (key,initialValue) => {
  const [isDark, setIsDark] = useLocalStorage(key, initialValue)
  console.log(isDark);

  const onChange = newValue => {
    setIsDark(newValue)
  }

  useEffect(() => {
    console.log('effected')
    const body = window.document.body; 
    return isDark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [isDark])


  return [isDark, setIsDark, onChange]
}
    
