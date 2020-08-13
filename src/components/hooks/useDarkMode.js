import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("darkmode", initialValue);

  return [value, setValue];
};

// is the "key" initialValue right? is that even a key?
// "lets just forward the value and setter returned out of useLocalStorage." are storedValue and setStoredValue no it?
// line 23 in index.js
