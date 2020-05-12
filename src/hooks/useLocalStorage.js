import { useState } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [value, setValue] = useState(() => {
    // access to create stateful logic for setting the state of values
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    return initialValue;
  });

  const setLocalStorageValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalStorageValue];
};
