// 

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage("dark-mode");
useEffect(() => {
 darkMode
   ? document.body.classList.add("dark-mode")
   : document.body.classList.remove("dark-mode");
}, [darkMode]);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // },

  return [darkMode, setDarkMode];
  };

export default useDarkMode;
