import { useLocalstorage} from './useLocalStorage';

export const useDarkMode = (key, intitialValue) => {
    const [values, setValues] = useLocalstorage(key, initialValue);

    
}