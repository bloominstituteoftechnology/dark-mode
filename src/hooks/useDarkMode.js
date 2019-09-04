import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

//  export const useState = () => {
//     const [storedValue, setValue] = useLocalStorage("darkMode");
//
//      useEffect (() => {
//          document.querySelector("body");
//         storedValue
//         ? classList.add("dark-mode")
//         : classList.remove("dark-mode");
//     }, [storedValue]);
//
//      return [storedValue, setValue];
// };





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
