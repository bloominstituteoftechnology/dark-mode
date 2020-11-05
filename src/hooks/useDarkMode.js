import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key, false)
  const toggleDarkMode = () => {
    // Toggle the value
    setValue(!value)
  }

  return [ value, toggleDarkMode]
}