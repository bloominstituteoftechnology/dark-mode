import React from "react"
import{useState }from "react";



const useLocalStorage = (key, initialValue) => {

 const item = JSON.parse(localStorage.getItem(key));


 const [storedValue, setStorededValue] = useState(item|| initialValue);

 
 const setValue = value => {
     window.localStorage.setItem(key, JSON.stringify(value))
     setStorededValue(value);
 };


 return [storedValue, setValue]
}

 

export default useLocalStorage;