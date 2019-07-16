import React, { useState} from 'react';



const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(()=> {
      const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });  

  const setValue = value =>{
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
  }

    return[storedValue, setValue];
};

export default useLocalStorage;