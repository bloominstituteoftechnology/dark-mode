import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChanges = updatedValue => {
      setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

export default useDarkMode;