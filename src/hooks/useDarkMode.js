import { useLocalStorage } from "./useLocalStorage";
import useEffect from "react";

const useDarkMode = (key, initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage(
        key,
        initialState
    );

useEffect(() => {
    if(darkMode){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
}, [darkMode])

return [darkMode, setDarkMode];

}

export default useDarkMode;