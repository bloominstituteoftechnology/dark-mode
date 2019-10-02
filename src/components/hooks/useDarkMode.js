import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkMode");

  useEffect(() => {
    const body = window.document.body;
    // If it's true, add the class dark-mode to the body element
    if (value) {
      body.classList.add("dark-mode");
    // If it's false, remove the class from the body element. 
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value]);

    //Finally, we need to return something out of here so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.
    return [value, setValue];
}

