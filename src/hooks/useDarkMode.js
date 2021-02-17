import { useLocalStorage } from './useLocalStorage'

const useDarkForm = () => {

  const [darkMode, setDarkMode] = useLocalStorage('dark-mode-preference')

  return [darkMode, setDarkMode]

}


export default useDarkForm;