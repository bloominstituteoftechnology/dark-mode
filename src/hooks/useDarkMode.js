import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("darkMode");
}