import {useLocalStorage} from "./useLocalStorage"


export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage(key, initialValue)


    return [values]
}


//Finally, we need to return something out of useDarkMode, so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.