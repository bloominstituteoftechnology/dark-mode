import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  useEffect(() => {
    value === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [setValue]);

  return [value, setValue];
};

export default useDarkMode;
