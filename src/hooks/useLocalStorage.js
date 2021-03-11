import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setLSValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [value, setLSValue];
};

export default useLocalStorage;
