import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
  const [ darkModeState, setDarkModeState ] = useLocalStorage('darkModeState', initialValue )
  return [ darkModeState, setDarkModeState]
}