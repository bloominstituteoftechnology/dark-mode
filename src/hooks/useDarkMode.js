import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage('darkMode', initialValues);

    return([values, setValues])
}

export default useDarkMode;
