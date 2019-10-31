import { useLocalStorage } from './useLocalStorage'
import React, { useEffect } from 'react'



export const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false)
  console.log(isDark);

  useEffect(() => {
    console.log('effected')
    const body = window.document.body; 
    return isDark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [isDark])

  return [isDark, setIsDark]
}
  