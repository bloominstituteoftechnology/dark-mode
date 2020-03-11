
import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode', initialValue)
    
    useEffect(() => {
    if(someValue){
        window.document.body.classList.add("dark-mode");
    }
    else{
            window.document.body.classList.remove("dark-mode");
        }
    });
    return [someValue, setSomeValue];
}


export default useDarkMode;


