import useLocalStorage from '../hooks/useLocalStorage'

    const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage('key')
        
  return [someValue,setSomeValue]
    }

    export default useDarkMode