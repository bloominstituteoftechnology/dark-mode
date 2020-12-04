import useLocalStorage from './useLocalStorage'
const useDarkMode = () => {
    const [darkState,setDarkState] = useLocalStorage('App','dark-mode')
    const toggleMode = e => {
        setDarkState(!darkState);
      };
      return [darkState,toggleMode]
}
export default useDarkMode;