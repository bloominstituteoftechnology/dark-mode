import { useState } from 'react';

<<<<<<< HEAD
export const useLocalStorage = (key, initialValue) => {
=======
const useLocalStorage = (key, initialValue) => {
>>>>>>> 932ecd74f8f44ad618702a5321a51fa91b3af563
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
<<<<<<< HEAD
  };

  return [storedValue, setValue];
};
=======
  }

  return [storedValue, setValue];
}

export default useLocalStorage;
>>>>>>> 932ecd74f8f44ad618702a5321a51fa91b3af563
