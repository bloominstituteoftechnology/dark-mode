
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useEffects} from "react";

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('DarkModeOn')
    const darkmodeActivated = window.localStorage.getItem("dark-mode_toggle") === "true";
    const darkmodeNotActivated =window.localStorage.reomveItem("dark-mode_toggle") === "false";
    useEffects(() => {
    if(darkmodeActivated === "true"){
        document.body.classList.add(dark-mode_toggle);
    }
    else if(darkmodeNotActivated != "true"){
            document.body.classList.remove(dark-mode_toggle);
        }
    });
}
return [storedValue, setStoredValue];

export default useDarkMode;


