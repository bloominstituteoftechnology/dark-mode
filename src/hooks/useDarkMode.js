import useLocalStorage from './useLocalStorage'

const useDarkMode = (key, initialValue) => {
const [value, setValue] = useLocalStorage(key, initialValue)
return [value, setValue]
}

export default useDarkMode