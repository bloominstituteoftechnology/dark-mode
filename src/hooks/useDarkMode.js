import useLocalStorage from './useLocalStorage';

const useDarkMode = (bool) => {
    //do you need the value of false or bool here? 
    const [darkMode, setDarkMode] = useLocalStorage("App", bool);

    // setter function
    const toggleMode = e => {
        // e.preventDefault();
        setDarkMode(!darkMode);
      };

    return ([darkMode, toggleMode]);
}

export default useDarkMode;