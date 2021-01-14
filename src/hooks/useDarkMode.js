
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', initialValues);

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }
    return [darkMode, toggleMode]
}
export default useDarkMode;