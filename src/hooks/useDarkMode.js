import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialDarkMode)=> {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialDarkMode);
  
    const changeValue = () => {
      setDarkMode(!darkMode)
    };

    return[darkMode, changeValue];
  };

  export default useDarkMode;