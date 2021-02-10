import useLocalStorage from './useLocalStorage'


const useDarkMode = (dark) =>{
    const [darkMode, setDarkMode] = useLocalStorage(dark)

    return [darkMode, setDarkMode]
}

export default useDarkMode