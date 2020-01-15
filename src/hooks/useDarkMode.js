
import useLocalStorage from "./useLocalStorage";

 export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  return [values, setValues]
}


