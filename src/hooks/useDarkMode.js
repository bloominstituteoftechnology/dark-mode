import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (dark) => {
    const [darkMode, useDarkMode] = useLocalStorage('darkmode',dark);
  
    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
          body.classList.add("dark-mode")
        } else {
          body.classList.remove("dark-mode")
        }
      }, [darkMode])

    return [darkMode, useDarkMode]
}