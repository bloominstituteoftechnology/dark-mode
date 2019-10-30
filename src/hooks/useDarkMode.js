import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
    const [values, setValues] = useLocalStorage(key, initialValues);
}

export default useDarkMode;