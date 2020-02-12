import { useState } from 'react';

export const useLocalstorage = (key, initialValue) => {

 const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  
  
  // if(JSON.parse(window.localStorage.getItem(key))) {
  //    return JSON.parse(window.localStorage.getItem(key))
  //  } else {
  //    window.localStorage.setItem(key, JSON.stringify(initialValue));
  //    return initialValue; 
  //  }
 });

 const setValue = value => {
   setStoredValue(value);
   window.localStorage.setItem(key, JSON.stringify(value));
 }

 return [storedValue, setValue]; 

};