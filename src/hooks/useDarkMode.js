import useLocalStorage from './useLocalStorage'

export const useDarkMode = (value) => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", value)

    return [someValue, setSomeValue]

}