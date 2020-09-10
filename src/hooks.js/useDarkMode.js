import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
