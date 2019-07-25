
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

 export const useState = () => {
    const [storedValue, setValue] = useLocalStorage("darkMode");

     useEffect (() => {
         document.querySelector("body");
        storedValue
        ? classList.add("dark-mode")
        : classList.remove("dark-mode");
    }, [storedValue]);

     return [storedValue, setValue];
}; 
