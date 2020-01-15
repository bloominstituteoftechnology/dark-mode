
import useLocalStorage from "./useLocalStorage";

 const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  return [values, setValues]
}


export default useDarkMode