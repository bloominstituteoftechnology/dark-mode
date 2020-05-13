import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialState, key) => {
    const [dark, setDark] = useLocalStorage(initialState, key);

    const handleChanges = e => {
        setDark({
          ...dark,
          [e.target.name]: e.target.value
        });
      };

    const setDarkMode = () => {
        setDark(!dark)
    }

    return [dark, handleChanges, setDarkMode]
}

export default useDarkMode;

