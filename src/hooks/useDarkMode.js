import useLocalStorage from "./useLocalStorage";
import {useEffects} from "react";

export const useDarkMode = () => {
   
   useEffects(() => {
    const [someValue, setSomeValue] = useLocalStorage('My Cyrpto')
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return [someValue, setSomeValue];
    });
   };
