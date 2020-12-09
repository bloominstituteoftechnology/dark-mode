import useLocalStorage from './useLocalStorage';

const useDarkMode = (darkMode) => {

    const [name, setName] = useLocalStorage('name', darkMode);
    return [name, setName];

};

export default useDarkMode