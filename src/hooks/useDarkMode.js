import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key);

    return [someValue, setSomeValue]
}
