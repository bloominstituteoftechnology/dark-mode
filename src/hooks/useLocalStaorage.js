import { useState } from 'react';

const useLocalStorage = (key, theme) => {
    const [storedTheme, setStoredTheme] = useState(() => {
      const mode = window.localStorage.getItem(key);
      return mode ? JSON.parse(mode) : theme;
    });
    const setMode = (mode) => {
      setStoredTheme(mode);
      window.localStorage.setItem(key, JSON.stringify(mode));
    };
    return [storedTheme, setMode];
  };

  export default useLocalStorage;