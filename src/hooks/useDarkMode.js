import {useLocalStorage} from "./useLocalStorage"

const useDarkMode = () => {
    const [isItDark, setValue] = useLocalStorage('darkMode')
    return [isItDark, setValue]
}
export default useDarkMode