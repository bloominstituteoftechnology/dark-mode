import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key, false)
  const toggleDarkMode = () => {
    setValue(!value)
  }

  return [ value, toggleDarkMode]
}