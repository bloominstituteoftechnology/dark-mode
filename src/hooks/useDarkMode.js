import useLocalStorage from './useLocalStorage';
//what is the key supposed to be?

function useDarkMode(key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
        
    return [darkMode, setDarkMode];
}

export default useDarkMode;