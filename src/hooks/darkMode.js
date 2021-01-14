import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('DarkMode', false)

  return [darkMode, setDarkMode]
}

export default useDarkMode