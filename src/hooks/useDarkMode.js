import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
  const [ darkModeState, setDarkModeState ] = useLocalStorage('darkModeState', false )
  return [ darkModeState, setDarkModeState]
}