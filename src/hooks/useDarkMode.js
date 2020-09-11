import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
    // className={ updatedValue ? "dark-mode" : "App" };
  };

  useEffect(() => {
    value === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [setValue]);

  return [value, setValue, handleChanges];
};

export default useDarkMode;
