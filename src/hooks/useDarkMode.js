import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkMode, setValue] = useLocalStorage('darkMode')

    return [darkMode, setValue]
}

export default useDarkMode; 