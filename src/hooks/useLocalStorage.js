import { useState } from "react"

export const useLocalStrorage = (key, initialValue) => {

  const [storedValues, setStoredValues] = useState( () => {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
    const setValue = value => {
      setStoredValues(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValues, setValue]
}