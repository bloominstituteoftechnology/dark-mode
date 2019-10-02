import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    if (typeof key !== "string") {
      throw new Error("Invalid Params ");
    }
    const [storedValue, setStoredValue] = useState(() => {
      if (localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    });
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
   };
   