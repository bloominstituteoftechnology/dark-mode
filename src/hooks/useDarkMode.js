import useLocalStorage from './useLocalStorage';

function useDarkMode(initialValues) {

    //const [values, setValues] = useLocalStorage(key, initialValue);
    const [values, setValues] = useLocalStorage('darkMode', initialValues)

    return [values, setValues]
}

export default useDarkMode