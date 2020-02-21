import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";


const useDarkMode = () => {

    const [lightSide, setLightSide] = useLocalStorage("key", true);
    //"key" is the key
    
    useEffect(() => {
        if (lightSide === true) {
            document.body.classList.add("dark-mode"); 
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [lightSide])
    return [lightSide, setLightSide];
};



export default useDarkMode;