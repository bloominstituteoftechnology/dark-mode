import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

  useEffect(() =>{
    window.document.body.classList.toggle('dark-mode')
},[setDarkMode])

  return [darkMode, setDarkMode]
}