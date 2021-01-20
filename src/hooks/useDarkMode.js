import {useLocalStorage} from "./useLocalStorage";

export function useDarkMode() {
    const [isDark, setDark] = useLocalStorage("darkModeOn")
    return [isDark, setDark]
        
}