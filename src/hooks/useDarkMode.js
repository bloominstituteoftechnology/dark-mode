import { useLocalStorage } from "./useLocalStorage"; // Import useLocalStorage
import { useEffect } from "react";


export const useDarkMode = () => {
    // Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled
    const [values, setValues] = useLocalStorage();
    const body = document.querySelector("body");

    useEffect(() => {
        // Now to add the class to the body. If we need to manipulate the DOM directly, how do we do that?
        // Any direct DOM manipulation is considered a side effect, right? So let's use the effect hook. -Import and set up your effect hook.
        if(values) {
            // Inside it, check to see if the value from useLocalStorage is true or false.
            body.classList.add("dark-mode"); // If it's true, add the class dark-mode to the body element.
        } else {
            body.classList.remove("dark-mode"); // If it's false, remove the class from the body element.
        }
    }, [values])

    // Finally, we need to return something out of here so we can use this in our app. What do you think we'll need? 
    // We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. 
    // Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.
    return [values, setValues];
}

