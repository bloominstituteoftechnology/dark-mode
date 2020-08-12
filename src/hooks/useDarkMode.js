import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('dark-mode')
   useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  },[isDark])

  return [isDark, setIsDark]
}

export default useDarkMode